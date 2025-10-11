import { currentUser, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { square } from "@/lib/Square";
import { absolutePath } from "@/lib/utils";

const settingsURLs = absolutePath("/settings");

export async function GET() {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    if (!user || !userId)
      return new NextResponse("Unauthorized", { status: 401 });
    const userSubscription = await db.userSubscription.findUnique({
      where: { userId },
    });
    if(userSubscription && userSubscription.SquareCustomerId) {
      // const squerSession = await square.customer
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
