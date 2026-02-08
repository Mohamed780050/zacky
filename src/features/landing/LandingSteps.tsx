"use client";

import { UserPlus, Settings, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    description: "Create your free account in seconds.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Select Tool",
    description: "Choose from our wide range of AI tools.",
    icon: Settings,
  },
  {
    id: 3,
    title: "Generate",
    description: "Get instant results powered by advanced AI.",
    icon: Zap,
  },
];

export default function LandingSteps() {
  return (
    <div id="how-it-works" className="scroll-mt-24 px-10 pb-20">
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          How It Works
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm font-light md:text-lg">
          Start creating in three simple steps.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-12 right-[16%] left-[16%] z-0 hidden h-0.5 bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-pink-500/50 md:block" />

        {steps.map((step, index) => (
          <div
            key={step.id}
            className="group relative z-10 flex flex-col items-center text-center"
          >
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <div className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <step.icon className="relative z-10 h-10 w-10 text-white" />
              <div className="bg-primary absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black text-sm font-bold text-white">
                {index + 1}
              </div>
            </div>

            <h3 className="group-hover:text-primary mb-3 text-xl font-bold text-white transition-colors">
              {step.title}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
