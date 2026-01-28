"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-background/50 mt-auto border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Zacky AI. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
