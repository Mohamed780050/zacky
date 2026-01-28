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
    <div id="how-it-works" className="scroll-mt-20 px-10 pb-20 text-white">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        How It Works
      </h2>
      <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="via-primary/50 absolute top-1/2 left-0 z-0 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent md:block"></div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-background/40 relative z-10 flex max-w-sm flex-col items-center rounded-xl border border-white/5 p-4 text-center shadow-lg backdrop-blur-md"
          >
            <div className="from-primary to-secondary shadow-glow mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
              <step.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
