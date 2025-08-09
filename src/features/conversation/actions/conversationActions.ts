"use server";
import { ConversationActionState } from "@/interfaces/interfaces";
import { conversationSchema } from "../Schema/conversationSchema";
import { flattenError } from "zod";
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
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );
    const data = await response.json();
    console.log(data);
    return {
      response:
        `${data.candidates?.[0]?.content?.parts?.[0]?.text}` ||
        "No response from AI",
    };
  } catch {
    return { message: "An error Connecting to the server" };
  }
}
