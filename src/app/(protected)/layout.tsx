import { ReactNode } from "react";
import type { Metadata } from "next";
import Sidebar from "@/features/root/_components/Sidebar";
import Navbar from "@/features/root/_components/Navbar";

export const metadata: Metadata = {
  title: `Home`,
  description: `Here you can see and choose from our advanced tools`,
};
function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background relative min-h-screen">
      <Sidebar />
      <main className="min-h-screen md:pl-72">
        <Navbar />
        <div className="pt-5">{children}</div>
      </main>
    </div>
  );
}
export default layout;
