import { instructions } from "@/data/static";

export async function conversationWithModel(prompt: string) {
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
            // {
            //   text: "If someone asked you to create image or videos or music or generate code tell them to go to that page that made specifically for any of these jobs.",
            // },
          ],
        },
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );
  return await response.json();
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
