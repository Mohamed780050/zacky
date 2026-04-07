"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { sendConversation } from "@/lib/sendMessages";
import { revalidatePath } from "next/cache";
import { conversationWithModel } from "@/lib/communicateWithModels";
import { CheckLimitation, decreaseFreeTrailCount } from "@/lib/api-limit";
import { isProSubscription } from "@/lib/getSubscription";

export async function conversationSubmit(
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

    const hasProSubscription = await isProSubscription();

    const { prompt } = parsedData.data;
    if (!hasProSubscription) {
      const stillCanUseFreeTrial = await CheckLimitation();
      if (!stillCanUseFreeTrial)
        throw { status: 403, message: "free trail is over" };
      await decreaseFreeTrailCount();
    }
    const data = await conversationWithModel(prompt);
    console.log(data)
    await sendConversation(prompt, `${data}`);
    console.log("working")

    revalidatePath("/conversation");

    return {
      message: null,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.status === 403)
      return {
        status: err.status,
        message: `${err.message}`,
      };
    return {
      message: "An error Connecting to the server",
      error: { prompt: "finished your free trail" },
      status: undefined,
    };
  }
}
