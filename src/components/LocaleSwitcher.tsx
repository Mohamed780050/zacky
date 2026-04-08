"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={isPending}
      onClick={toggleLocale}
      className={cn(
        "group relative flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95",
        isPending && "opacity-50"
      )}
    >
      <Languages className="h-4 w-4 transition-transform group-hover:rotate-12" />
      <span className="min-w-[20px] uppercase">{locale === "en" ? "AR" : "EN"}</span>
      
      {/* Decorative glow effect */}
      <div className="absolute inset-0 -z-10 bg-primary/10 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
    </Button>
  );
}
