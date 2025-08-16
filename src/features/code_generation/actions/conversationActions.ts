"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { sendCode } from "@/lib/sendMessages";
import { GenerateCodeWithModel } from "@/lib/communicateWithModels";

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
    const data = await GenerateCodeWithModel(prompt);

    await sendCode(prompt, `${data?.candidates?.[0]?.content?.parts[0].text}`);

    return {
      message: null,
    };
  } catch {
    return { message: "An error Connecting to the server" };
  }
}
