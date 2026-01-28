import {
  SidebarLinksInterface,
  testimonialsInterface,
} from "@/interfaces/interfaces";
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
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    href: "/image_generation",
    icon: React.createElement(ImageIcon, { className: "text-pink-500" }),
    bgColor: "bg-pink-500/10",
    isComingSoon: true,
  },
  {
    label: "Video Generation",
    href: "/video_generation",
    icon: React.createElement(VideoIcon, { className: "text-orange-700" }),
    bgColor: "bg-orange-700/10",
    isComingSoon: true,
  },
  {
    label: "Music Generation",
    href: "/music_generation",
    icon: React.createElement(MusicIcon, { className: "text-emerald-500" }),
    bgColor: "bg-emerald-500/10",
    isComingSoon: true,
  },
  {
    label: "Code Generation",
    href: "/code_generation",
    icon: React.createElement(CodeIcon, { className: "text-green-700" }),
    bgColor: "bg-green-700/10",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: React.createElement(SettingsIcon),
  },
];

export const FormStyles =
  "fixed bottom-4 w-full max-w-[calc(100%-2rem)] gap-2 rounded-2xl border border-white/10 bg-background/60 p-2 px-3 focus-within:ring-2 focus-within:ring-primary/40 backdrop-blur-xl md:max-w-[calc(100%-20rem)] md:px-4 lg:max-w-[calc(100%-21.5rem)] shadow-2xl transition-all duration-300 ease-in-out hover:bg-background/70 hover:border-white/20";
export const SubmitButtonStyles =
  "absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer rounded-full bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 transition-all hover:scale-110 hover:shadow-glow active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-0";
// export const beforeElementOfMessages =
//   "relative after:content-[''] after:block after:w-5 after:h-5 after:bg-red-800 after:absolute";
export const instructions = [
  {
    text: "You are a useful assistant. Be helpful, concise, and polite.",
  },
  {
    text: "Your name is Zacky.",
  },
  {
    text: "You are trained and made by Mohamed Omer.",
  },
];

export const instructionsForGenAi = [
  "You are a useful assistant. Be helpful, concise, and polite.",
  "Your name is Zacky.",
  "You are trained and made by Mohamed Omer.",
];

export const instructionsForGenAiAndCoding = [
  "You are a useful assistant. Be helpful, concise, and polite.",
  "Your name is Zacky.",
  "You are trained and made by Mohamed Omer.",
  "here you only make code and if the user did not specify a programming language ues javascript by default.",
];
export const testimonials: testimonialsInterface[] = [
  {
    name: "Mohamed Baker",
    avatar: "MB",
    description: "This is the greatest AI tool I have ever tested.",
    title: "Flutter Developer",
  },
  {
    name: "Mohamed Baker",
    avatar: "MB",
    description: "This is the greatest AI tool I have ever tested.",
    title: "Flutter Developer",
  },
  {
    name: "Mohamed Baker",
    avatar: "MB",
    description: "This is the greatest AI tool I have ever tested.",
    title: "Flutter Developer",
  },
  {
    name: "Mohamed Baker",
    avatar: "MB",
    description: "This is the greatest AI tool I have ever tested.",
    title: "Flutter Developer",
  },
];
export const Max_FREE_COUNTS = 15;
