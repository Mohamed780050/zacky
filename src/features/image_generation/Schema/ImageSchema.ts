import { z } from "zod";

export const imageSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
});
