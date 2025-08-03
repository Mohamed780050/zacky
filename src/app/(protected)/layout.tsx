import { ReactNode } from "react";
import type { Metadata } from "next";
import Sidebar from "@/features/root/_components/Sidebar";
import Navbar from "@/features/root/_components/Navbar";

export const metadata: Metadata = {
  title: ``,
  description: ``,
};
function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full relative">
      <Sidebar />
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
export default layout;
