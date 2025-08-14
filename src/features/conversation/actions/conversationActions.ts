"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { sendConversation } from "@/lib/sendMessages";
import { revalidatePath } from "next/cache";
import { conversationWithModel } from "@/lib/communicateWithModels";
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
    const data = await conversationWithModel(prompt);

    await sendConversation(
      prompt,
      `${data?.candidates?.[0]?.content?.parts[0].text}`,
    );

    revalidatePath("/conversation");

    return {
      message: null,
    };
  } catch {
    return { message: "An error Connecting to the server" };
  }
}
