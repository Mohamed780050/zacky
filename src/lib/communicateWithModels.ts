import { instructions, instructionsForGenAi } from "@/data/static";
import { ai } from "./ai";

export async function conversationWithModel(prompt: string) {
  try {
    const res = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: instructionsForGenAi.join("\n"),
      },
      contents: prompt,
    });
    return res.text;
  } catch (error) {
    console.log(error);
  }
}

export async function CreateImageWithAi(prompt: string) {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": `${process.env.GOOGLE_AI_STUDIO_API_KEY}`,
      },
      body: JSON.stringify({
        system_instruction: {
          // <-- tell the model how to behave
          parts: [...instructions],
        },
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          // ask for image output (and text if you want both)
          responseModalities: ["TEXT", "IMAGE"],
          // optional image options may exist depending on model: seed, imageSize etc.
        },
      }),
    },
  );
  return await response.json();
}

export async function GenerateCodeWithModel(prompt: string) {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": `${process.env.GOOGLE_AI_STUDIO_API_KEY}`,
      },
      body: JSON.stringify({
        system_instruction: {
          // <-- tell the model how to behave
          parts: [
            ...instructions,
            {
              text: "here you only make code and if the user did not specify a programming language ues javascript by default.",
            },
          ],
        },
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );
  return await response.json();
}
