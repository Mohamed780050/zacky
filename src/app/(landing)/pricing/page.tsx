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
    <div className={cn("flex flex-col min-h-screen", font.className)}>
      <main className="flex flex-col items-center pt-52 pb-24 px-6 relative">
        <div className="max-w-4xl w-full text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
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
                colorBackground: "#020617", // Rich dark slate background
                colorInputBackground: "#111827", // Slightly lighter input backgrounds
                colorInputText: "#ffffff",
                colorTextSecondary: "#94a3b8", // Muted text color
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
