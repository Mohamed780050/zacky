"use client";

import LandingNavbar from "@/features/landing/LandingNavbar";
import LandingFooter from "@/features/landing/LandingFooter";
import { PricingTable } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function PricingPage() {
  return (
    <div className={cn("min-h-screen bg-slate-950 text-white", font.className)}>
      <LandingNavbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center pt-40 pb-24 px-6">
        <div className="max-w-4xl w-full text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            Simple, Transparent <br /> Pricing Plans
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose the power of Zacky AI that fits your needs. No hidden fees, cancel anytime.
            Trusted by developers and creators worldwide.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          {/* Official Clerk Pricing Table with custom appearance */}
          <PricingTable 
            appearance={{
              baseTheme: dark,
              variables: {
                colorPrimary: "oklch(0.6 0.25 280)",
                colorText: "#ffffff",
                fontFamily: font.style.fontFamily,
              },
              elements: {
                pricingTable: "bg-transparent",
                pricingTableCard: "bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/20",
                pricingTableButton: "rounded-full font-bold transition-all hover:scale-[1.02] active:scale-95 px-8",
                pricingTableFeatureList: "text-slate-300",
                pricingTableHeader: "text-white",
                pricingTablePrice: "text-white font-extrabold",
              }
            }}
          />
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
