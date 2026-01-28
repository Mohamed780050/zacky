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
    <div className="fixed top-4 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2">
      <nav className="bg-background/60 hover:bg-background/70 relative flex items-center justify-between rounded-full border border-white/10 px-4 py-1 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-x-2 px-2 transition hover:opacity-80"
        >
          <Logo />
          <h1
            className={cn(
              "hidden text-2xl font-bold text-white sm:block",
              font.className,
            )}
          >
            Zacky
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-x-8 rounded-full border border-white/5 bg-white/5 px-8 py-1 md:flex">
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
            How it Works
          </Link>
          <Link
            href="#faq"
            className="hover:shadow-glow-text text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-4 pr-2">
          {!isSignedIn && (
            <Link href="/sign-in" className="hidden sm:block">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-gray-300 hover:bg-white/10 hover:text-white"
              >
                Sign In
              </Button>
            </Link>
          )}
          <Link href={isSignedIn ? "/home" : "/sign-up"}>
            <Button
              size="sm"
              className="from-primary to-secondary hover:shadow-primary/25 rounded-full border-0 bg-gradient-to-r text-white shadow-lg transition-transform hover:scale-105"
            >
              {isSignedIn ? "Dashboard" : "Get Started"}
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
