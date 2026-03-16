import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative mr-2 h-24 w-24", className)}>
      <Image fill src="/logo.svg" alt="logo" />
    </div>
  );
}
export default Logo;
