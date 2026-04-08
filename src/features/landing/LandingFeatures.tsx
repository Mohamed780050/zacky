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
import { useTranslations } from "next-intl";

export default function LandingFeatures() {
  const t = useTranslations("LandingFeatures");

  const features = [
    {
      title: t("conversation.title"),
      description: t("conversation.description"),
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      title: t("image.title"),
      description: t("image.description"),
      icon: ImageIcon,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: t("video.title"),
      description: t("video.description"),
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
    },
    {
      title: t("music.title"),
      description: t("music.description"),
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: t("code.title"),
      description: t("code.description"),
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
    },
  ];

  return (
    <div id="features" className="mx-auto max-w-7xl scroll-mt-24 px-10 pb-20">
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm font-light md:text-lg">
          {t("subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <Card
            key={item.title}
            className="hover:shadow-primary/10 group relative cursor-pointer overflow-hidden border-0 border-white/10 bg-white/5 ring-1 ring-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${item.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
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
              <div className="rtl:flex-row-reverse rtl:justify-end flex items-center text-xs font-medium text-white/50 transition-colors group-hover:text-white">
                {t("tryItOut")}{" "}
                <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
