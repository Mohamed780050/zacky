import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Zacky Sign up`,
  description: `Sign up to Zacky`,
};
function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
export default layout;
