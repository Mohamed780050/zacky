"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { CreateImageWithAi } from "@/lib/communicateWithModels";
export async function ImageSubmit(
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
    console.log(prompt);
    const data = await CreateImageWithAi(prompt);
    console.log(data);

    return {
      message: null,
    };
  } catch {
    return { message: "An error Connecting to the server" };
  }
}
