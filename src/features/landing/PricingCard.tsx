import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost" | "secondary";
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  buttonText = "Get Started",
  buttonVariant = "default",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8 shadow-2xl backdrop-blur-xl transition-all duration-300",
        isPopular
          ? "border-blue-500/50 bg-[#030712]/80 md:scale-105"
          : "border-white/10 bg-[#030712]/40"
      )}
    >
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>

      <div className="mb-6 flex items-baseline gap-x-2">
        <span className="text-4xl font-extrabold tracking-tight text-white">{price}</span>
        {price !== "Custom" && <span className="text-sm font-semibold text-gray-400">/mo</span>}
      </div>

      <Button
        variant={buttonVariant}
        className={cn(
          "mb-8 w-full rounded-full py-6 text-base font-bold transition-all hover:scale-105 active:scale-95",
          isPopular
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        {buttonText}
      </Button>

      <div className="flex-1 space-y-4 flex flex-col justify-start">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-x-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
