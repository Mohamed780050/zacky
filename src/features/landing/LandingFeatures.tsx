"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Conversation",
    description: "Our most advanced conversation model.",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Image Generation",
    description: "Turn your prompt into an image.",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    title: "Video Generation",
    description: "Turn your prompt into video.",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    title: "Music Generation",
    description: "Turn your prompt into music.",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Code Generation",
    description: "Generate code using descriptive text.",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export default function LandingFeatures() {
  return (
    <div id="features" className="scroll-mt-24 px-10 pb-20">
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl">
          Supercharge Your Creativity
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm font-light md:text-lg">
          Access the most powerful AI models in one platform.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <Card
            key={item.title}
            className="hover:shadow-primary/10 group relative cursor-pointer overflow-hidden border-0 border-white/10 bg-white/5 ring-1 ring-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-x-3">
                <div
                  className={`w-fit rounded-md p-2 ${item.bgColor} ${item.color} ring-1 ring-white/20 ring-inset`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-lg font-bold text-white">{item.title}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pt-2 pb-6">
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
              <div className="flex items-center text-xs font-medium text-white/50 transition-colors group-hover:text-white">
                Try it out{" "}
                <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
