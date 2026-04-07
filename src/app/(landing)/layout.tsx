import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zacky",
  description: "The first and most advanced AI that have ever created",
};

import LandingNavbar from "@/features/landing/LandingNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark h-full bg-slate-900 text-white selection:bg-blue-500/30 selection:text-blue-200">
      <LandingNavbar />
      <main className="h-full overflow-auto bg-slate-950">
        <div className="relative h-full w-full">
          {/* Moving background to be peer of children but stay relative to main */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#ffffff33_1px,#020617_1px)] bg-[size:20px_20px] opacity-20"></div>
          <div className="absolute top-0 z-[-1] h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
