import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getAllConversation() {
  const { userId } = await auth();
  const messages = await db.conversation.findMany({
    where: { userId: `${userId}` },
    select: { response: true, message: true },
  });
  return messages;
}

export async function getAllOfMyCode() {
  const { userId } = await auth();
  const messages = await db.codeMessage.findMany({
    where: { userId: `${userId}` },
    select: { response: true, message: true },
  });
  return messages;
}

export async function getAllOfMyImages() {
  const { userId } = await auth();
  const messages = await db.imageMessage.findMany({
    where: { userId: `${userId}` },
    select: { imageUrl: true, description: true },
    orderBy: { createdAt: "asc" }
  });
  return messages;
}
