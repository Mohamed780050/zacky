import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ``,
  description: ``,
};
function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
export default layout;