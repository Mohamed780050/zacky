import { ReactNode } from "react";

export interface SidebarLinksInterface {
  label: string;
  href: string;
  icon: ReactNode;
  bgColor?: string;
}
export interface HeadingProps {
  title: string;
  description?: string;
  icon: ReactNode;
  bgColor: string;
}
export interface ConversationActionState {
  errors?: {
    prompt?: string[];
  };
  message?: string | null;
}
