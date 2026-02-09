"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Sparkles, ArrowRight } from "lucide-react";

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative z-0 mx-auto max-w-7xl space-y-5 overflow-hidden py-36 text-center font-bold text-white">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-500/20 opacity-50 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[800px] rounded-full bg-blue-500/10 opacity-30 blur-[100px]" />

      <div className="mb-8 flex items-center justify-center">
        <div className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-xl backdrop-blur-sm transition duration-300 hover:bg-white/10">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-gray-200">
            The Next Gen AI Platform
          </span>
        </div>
      </div>

      <div className="z-10 space-y-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <h1 className="leading-tight drop-shadow-2xl">
          The Best AI Tool for <br />
          <span className="inline-block">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Image Generation.",
                  "Video Creation.",
                  "Code Assistant.",
                  "Music Composition.",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "animate-gradient-x bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent",
                cursorClassName: "text-violet-400",
              }}
            />
          </span>
        </h1>
      </div>

      <div className="z-10 mx-auto max-w-2xl px-4 text-sm font-light text-gray-300 drop-shadow-md md:text-xl">
        Unleash your creativity with the power of AI. Create content 10x faster
        with our state-of-the-art generative models.
      </div>

      <div className="z-10 pt-4">
        <Link href={isSignedIn ? "/home" : "/sign-up"}>
          <Button
            variant="premium"
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-6 font-semibold shadow-lg ring-1 shadow-violet-500/25 ring-white/20 transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-indigo-700 md:p-8 md:text-lg"
          >
            Start Generating For Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="z-10 text-xs font-normal text-gray-400 md:text-sm">
        No credit card required &middot; 15 messages trial
      </div>
    </div>
  );
}
