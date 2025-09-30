"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { sendConversation } from "@/lib/sendMessages";
import { revalidatePath } from "next/cache";
import { conversationWithModel } from "@/lib/communicateWithModels";
import { CheckLimitation, decreaseFreeTrailCount } from "@/lib/api-limit";

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

    const { prompt } = parsedData.data;
    const stillCanUseFreeTrial = await CheckLimitation();

    if (!stillCanUseFreeTrial)
      throw { status: 403, message: "free trail is over" };
    await decreaseFreeTrailCount();

    const data = await conversationWithModel(prompt);

    await sendConversation(
      prompt,
      `${data?.candidates?.[0]?.content?.parts[0].text}`,
    );

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
