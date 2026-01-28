import { GoogleGenAI } from "@google/genai";

// Manually passing the key
export const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_AI_STUDIO_API_KEY,
});