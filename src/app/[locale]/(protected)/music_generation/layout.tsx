import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Music Generator",
  description: "You can Generate the most best bracts code",
};

export default function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
