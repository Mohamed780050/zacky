import { instructions, instructionsForGenAi, instructionsForGenAiAndCoding } from "@/data/static";
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
  try {
    // Using a completely free API that doesn't require a paid tier or API key.
    // We request the image, turn it into an ArrayBuffer, then convert to Base64
    // so our existing Cloudinary setup continues working seamlessly.
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?nologo=true`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to generate image from free API. Status: ${response.status}`);
    }

    // Convert the image blob to a Buffer then to a base64 string
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");

    return base64Image;
  } catch (error: any) {
    console.error("Free Image Generate Error: ", error.message);
    throw Error("Failed to generate image. Please try again later.");
  }
}

export async function GenerateCodeWithModel(prompt: string) {
  const res = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: instructionsForGenAiAndCoding.join("\n"),
      },
      contents: prompt,
    });

  return res.text;
}
