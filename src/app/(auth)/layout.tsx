import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ``,
  description: ``,
};
function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
export default layout;
