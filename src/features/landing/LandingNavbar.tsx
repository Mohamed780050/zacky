"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Logo from "../root/_components/Logo";
import { ArrowRight } from "lucide-react";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-7xl px-4">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#030712]/40 px-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-[#030712]/60">
        <Link
          href="/"
          className="flex items-center gap-x-2.5 transition-opacity hover:opacity-80"
        >
          <Logo className="h-8 w-8" />
          <h1
            className={cn(
              "text-xl font-bold tracking-tight text-white",
              font.className,
            )}
          >
            Zacky
          </h1>
        </Link>

        <div className="hidden items-center gap-x-12 md:flex">
          <Link
            href="#features"
            className="text-sm font-semibold text-gray-400 transition-all duration-300 hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-semibold text-gray-400 transition-all duration-300 hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-semibold text-gray-400 transition-all duration-300 hover:text-white"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          {isSignedIn ? (
            <Link href="/home">
              <Button
                size="lg"
                className="group relative flex items-center gap-x-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
              >
                Dashboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-x-4">
              <Link href="/sign-in" className="hidden sm:block">
                <Button
                  variant="ghost"
                  className="rounded-full font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="rounded-full bg-white px-8 font-bold text-black transition-all hover:scale-105 hover:bg-gray-100 active:scale-95">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
