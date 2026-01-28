"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect";

export default function LandingHero() {
  const { isSignedIn } = useAuth();
  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="mb-8 flex items-center justify-center">
        <span className="bg-secondary/10 text-secondary ring-secondary/20 rounded-full px-4 py-2 text-xs leading-5 font-semibold tracking-wide uppercase shadow-sm ring-1">
          ✨ The Next Gen AI
        </span>
      </div>
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1 className="leading-tight">The Best AI Tool for</h1>
        <div className="from-primary to-secondary animate-gradient-x bg-gradient-to-r via-purple-500 bg-clip-text pb-2 text-transparent">
          <TypeWriterComponent
            options={{
              strings: ["Chatbot", "Code Generator", "Image Generator"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-muted-foreground text-sm font-light md:text-xl">
        Create content using AI 10X faster
      </div>
      <div>
        <Link href={isSignedIn ? "/home" : "/sign-in"}>
          <Button
            variant="premium"
            className="group from-primary to-secondary shadow-primary/25 hover:shadow-primary/40 relative rounded-full bg-gradient-to-r p-4 font-semibold shadow-lg transition-all md:p-6 md:text-lg"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-muted-foreground text-xs font-normal md:text-sm">
        No credit card required
      </div>
    </div>
  );
}
