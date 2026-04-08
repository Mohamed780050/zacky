"use client";
import { SheetClose } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/routing";
import Logo from "./Logo";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { SidebarLinksData } from "@/data/static";

import { useTranslations } from "next-intl";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

function SidebarLinks({ isADialog }: { isADialog?: boolean }) {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="mb-14 pl-3">
        <Link href="/home" className="flex items-center">
          <Logo />
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            {t("brand")}
          </h1>
        </Link>
      </div>
      <ul className="space-y-1">
        {SidebarLinksData.map((link, index) => {
          if (link.isComingSoon) return null;
          return (
            <li key={index} className="px-3">
              {isADialog ? (
                <SheetClose className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "group flex w-full flex-1 cursor-pointer items-center justify-start gap-3 rounded-lg p-3 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white",
                      pathname === link.href ? "bg-white/10 text-white" : "",
                    )}
                  >
                    {link.icon}
                    {t(link.label as any)}
                  </Link>
                </SheetClose>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "group flex w-full flex-1 cursor-pointer items-center justify-start gap-3 rounded-lg p-3 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white",
                    pathname === link.href ? "bg-white/10 text-white" : "",
                  )}
                >
                  {link.icon}
                  {t(link.label as any)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SidebarLinks;
