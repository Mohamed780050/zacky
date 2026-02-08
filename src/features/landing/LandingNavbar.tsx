"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Logo from "../root/_components/Logo";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed inset-x-0 top-6 z-50 mx-auto max-w-4xl px-4">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-black/50">
        <Link href="/" className="flex items-center gap-x-2">
          <Logo className="h-8 w-8 md:h-10 md:w-10" />
          <h1
            className={cn(
              "hidden text-xl font-bold tracking-tight text-white sm:block",
              font.className,
            )}
          >
            Zacky
          </h1>
        </Link>

        <div className="hidden items-center gap-x-8 md:flex">
          <Link
            href="#features"
            className="hover:shadow-glow-text text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:shadow-glow-text text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="hover:shadow-glow-text text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-x-2">
          {isSignedIn ? (
            <Link href="/home">
              <Button
                size="sm"
                variant="premium"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 font-medium shadow-md hover:from-violet-700 hover:to-indigo-700"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-x-2">
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  className="rounded-full bg-white font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
                >
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
