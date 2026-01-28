"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/CodeSchema";
import { flattenError } from "zod";
import { sendCode } from "@/lib/sendMessages";
import { GenerateCodeWithModel } from "@/lib/communicateWithModels";
import { revalidatePath } from "next/cache";
import { CheckLimitation, decreaseFreeTrailCount } from "@/lib/api-limit";

export async function CodeSubmit(
  prevState: ConversationActionState,
  formData: FormData,
) {
  try {
    const parsedData = conversationSchema.safeParse({
      prompt: formData.get("prompt"),
    });

    if (!parsedData.success) {
      const { fieldErrors } = flattenError(parsedData.error);
      return { errors: fieldErrors };
    }

    const { prompt } = parsedData.data;
    const stillCanUseFreeTrial = await CheckLimitation();

    if (!stillCanUseFreeTrial)
      throw { status: 403, message: "free trail is over" };

    await decreaseFreeTrailCount();

    const data = await GenerateCodeWithModel(prompt);

    await sendCode(prompt, `${data}`);

    revalidatePath("/code_generation");
    return {
      message: null,
    };
  } catch {
    return { message: "An error Connecting to the server" };
  }
}
