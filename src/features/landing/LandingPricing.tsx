"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import { Switch } from "@/components/ui/switch";

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "Perfect for exploring the AI capabilities.",
    features: [
      "100 AI queries per month",
      "Standard text generation",
      "Basic image generation (5/day)",
      "Community support",
    ],
    buttonText: "Start for free",
    isPopular: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$20",
    annualPrice: "$16",
    description: "Unlock the full power of Zacky AI.",
    features: [
      "Unlimited AI queries",
      "Advanced code generation",
      "High-res image generation (100/day)",
      "Video & Audio processing",
      "Priority API access",
    ],
    buttonText: "Upgrade to Pro",
    isPopular: true,
  },
  {
    name: "Business",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "Tailored AI solutions for your team.",
    features: [
      "Everything in Pro",
      "Custom AI model fine-tuning",
      "Dedicated account manager",
      "SLA & Premium Support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

export default function LandingPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing that scales with you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Choose the perfect plan to turbocharge your AI workflow. Simple, transparent pricing for teams of all sizes.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-x-4 rounded-full border border-white/10 bg-[#030712]/40 p-2 shadow-2xl backdrop-blur-md">
            <span
              className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-600"
            />
            <span
              className={`text-sm font-semibold transition-colors ${isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Annually <span className="ml-1 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={isAnnual ? tier.annualPrice : tier.monthlyPrice}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              buttonText={tier.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
