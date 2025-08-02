import { SidebarLinksInterface } from "@/interfaces/interfaces";
import {
  CodeIcon,
  Home,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import React from "react";

export const SidebarLinksData: SidebarLinksInterface[] = [
  {
    label: "Home",
    href: "/home",
    icon: React.createElement(Home, { className: "text-sky-500" }),
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: React.createElement(MessageSquare, { className: "text-violet-500" }),
  },
  {
    label: "Image Generation",
    href: "/image_generation",
    icon: React.createElement(ImageIcon, { className: "text-pink-500" }),
  },
  {
    label: "Video Generation",
    href: "/video_generation",
    icon: React.createElement(VideoIcon, { className: "text-orange-700" }),
  },
  {
    label: "Music Generation",
    href: "/music_generation",
    icon: React.createElement(MusicIcon, { className: "text-emerald-500" }),
  },
  {
    label: "Code Generation",
    href: "/code_generation",
    icon: React.createElement(CodeIcon, { className: "text-green-700" }),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: React.createElement(SettingsIcon),
  },
];
