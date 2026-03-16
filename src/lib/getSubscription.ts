import { auth, clerkClient } from "@clerk/nextjs/server";

export async function isProSubscription() {
  const { has } = await auth();
  const hasProSubscription = has({ plan: "pro_plan" });
  return hasProSubscription;
}
