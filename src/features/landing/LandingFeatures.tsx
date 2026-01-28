"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ImageIcon, VideoIcon, Music, Code } from "lucide-react";

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
    <div id="features" className="scroll-mt-20 px-10 pb-20">
      <h2 className="mb-12 text-center text-4xl font-extrabold text-white">
        Supercharge Your Creativity
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <Card
            key={item.title}
            className="bg-background/20 border-primary/10 hover:shadow-glow border-0 text-white backdrop-blur-sm transition-all hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className={`w-fit rounded-md p-2 ${item.bgColor}`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div className="font-bold">{item.title}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pt-2">
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
