"use server";

import { ConversationActionState } from "@/interfaces/interfaces";
import { flattenError } from "zod";
import { revalidatePath } from "next/cache";
import { imageSchema } from "../Schema/ImageSchema";
import { CheckLimitation, decreaseFreeTrailCount } from "@/lib/api-limit";
import { isProSubscription } from "@/lib/getSubscription";
import { CreateImageWithAi } from "@/lib/communicateWithModels";
import { uploadBase64Image } from "@/lib/cloudinary";
import { sendImageMessage } from "@/lib/sendMessages";

export async function ImageSubmit(
  prevState: ConversationActionState,
  formData: FormData,
) {
  try {
    const parsedData = imageSchema.safeParse({
      prompt: formData.get("prompt"),
    });

    if (!parsedData.success) {
      const { fieldErrors } = flattenError(parsedData.error);
      return { errors: fieldErrors };
    }

    const { prompt } = parsedData.data;
    const hasProSubscription = await isProSubscription();

    if (!hasProSubscription) {
      const stillCanUseFreeTrial = await CheckLimitation();
      if (!stillCanUseFreeTrial)
        throw { status: 403, message: "free trail is over" };
      await decreaseFreeTrailCount();
    }

    // Double-decreasing? In CodeActions.ts it decreased again. I'll stick to one decrease for accuracy,
    // actually CodeActions.ts had:
    //     }
    //    await decreaseFreeTrailCount();
    // This looks like a bug in CodeActions.ts (decreasing twice if not pro, or decreasing even if pro).
    // I will only decrease once for non-pro users, keeping it sane. Wait, maybe that was intentional?
    // I'll just check limitation and decrease once if not pro, or maybe it was meant for all?
    // Let's mirror what makes sense: only decrease if NOT pro subscription.
    // Wait, the API-Limit is specifically called "decreaseFreeTrailCount", so pros shouldn't decrease it.

    const base64Image = await CreateImageWithAi(prompt);
    
    // Upload the raw base64 string to Cloudinary
    const cloudinaryUrl = await uploadBase64Image(base64Image);

    // Save to the database
    await sendImageMessage(prompt, cloudinaryUrl);

    revalidatePath("/image_generation");
    
    return {
      message: null,
    };
  } catch (error: any) {
    console.error("ImageSubmit Error:", error);
    const errorMessage = error?.message?.includes("billing") 
      ? error.message 
      : "An error Connecting to the server";
    return { message: errorMessage };
  }
}
