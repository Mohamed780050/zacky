import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Conversation",
  description: "You can talk with Zacky as much as you like",
};

export default function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
