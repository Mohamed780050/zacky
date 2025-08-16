import { db } from "./db";
import { Max_FREE_COUNTS } from "@/data/static";
import { auth } from "@clerk/nextjs/server";

export async function decreaseFreeTrail() {
  const { userId } = await auth();
  if (!userId) return null;
  const findUserLimitation = await db.userLimitation.findFirst({
    where: { userId },
  });
  if (findUserLimitation)
    await db.userLimitation.update({
      where: { id: findUserLimitation.id },
      data: { count: findUserLimitation.count + 1 },
    });
  else {
    await db.userLimitation.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
}

export async function CheckLimitation() {
  const { userId } = await auth();
  if (!userId) return false;
  const userLimitation = await db.userLimitation.findFirst({
    where: {
      userId,
    },
  });
  if (!userLimitation || userLimitation.count < Max_FREE_COUNTS) return true;
  else return false;
}
