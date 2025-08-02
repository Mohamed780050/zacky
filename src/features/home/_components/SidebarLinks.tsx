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
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="pl-3 mb-14">
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
        {SidebarLinksData.map((link, index) => (
          <li key={index} className="px-3" onClick={() => setIsOpen?.(false)}>
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-3 flex-1 text-sm group p-3 w-full rounded-lg justify-start font-medium cursor-pointer hover: text-white hover:bg-white/10 transition",
                pathname === link.href ? "bg-white/10 text-white" : ""
              )}
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
