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
    <nav className="flex items-center justify-between bg-transparent p-4">
      <Link href="/" className="flex items-center">
        <Logo />
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Zacky
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/home" : "/sign-in"}>
          <Button variant="outline">Get started</Button>
        </Link>
      </div>
    </nav>
  );
}
