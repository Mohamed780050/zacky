"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarLinksData } from "@/data/static";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

function SidebarLinks({
  setIsOpen,
}: {
  setIsOpen?: (isOpen: boolean) => void;
}) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="mb-14 pl-3">
        <Link
          href="/home"
          className="flex items-center"
          onClick={() => setIsOpen?.(false)}
        >
          <Logo />
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Zacky
          </h1>
        </Link>
      </div>
      <ul className="space-y-1">
        {SidebarLinksData.map((link, index) => {
          if (link.isComingSoon) return null;
          return (
            <li key={index} className="px-3" onClick={() => setIsOpen?.(false)}>
              <Link
                href={link.href}
                className={cn(
                  "group flex w-full flex-1 cursor-pointer items-center justify-start gap-3 rounded-lg p-3 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white",
                  pathname === link.href ? "bg-white/10 text-white" : ""
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SidebarLinks;
