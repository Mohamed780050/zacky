"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
import { sendConversation } from "@/lib/sendMessages";
import { revalidatePath } from "next/cache";
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
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": `${process.env.GOOGLE_AI_STUDIO_API_KEY}`, // 🚨 Not secure!
        },
        body: JSON.stringify({
          system_instruction: {
            // <-- tell the model how to behave
            parts: [
              {
                text: "You are a useful assistant. Be helpful, concise, and polite.",
              },
              {
                text: "Your name is Zacky.",
              },
              {
                text: "You are trained and made by Mohamed Omer.",
              },
            ],
          },
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );
    const data = await response.json();
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
