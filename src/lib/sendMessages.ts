import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function sendConversation(prompt: string, response: string) {
  const { userId } = await auth();
  await db.conversation.create({
    data: {
      userId: `${userId}`,
      message: prompt,
      response,
    },
  });
}

export async function sendCode(prompt: string, response: string) {
  const { userId } = await auth();
  await db.codeMessage.create({
    data: {
      userId: `${userId}`,
      response: response,
      message: prompt,
    },
  });
}
