"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarLinksData } from "@/data/static";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

function SidebarLinks() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="pl-3 mb-14">
        <Link href="/home" className="flex items-center">
          <Logo />
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Zacky
          </h1>
        </Link>
      </div>
      <ul className="space-y-1">
        {SidebarLinksData.map((link, index) => (
          <li key={index} className="px-3">
            <Link
              href={link.href}
              className="flex items-center gap-3 flex-1 text-sm group p-3 w-full rounded-lg justify-start font-medium cursor-pointer hover: text-white hover:bg-white/10 transition"
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SidebarLinks;
