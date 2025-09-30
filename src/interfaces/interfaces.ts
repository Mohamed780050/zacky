import { ReactNode } from "react";

export interface SidebarLinksInterface {
  label: string;
  href: string;
  icon: ReactNode;
  bgColor?: string;
  isComingSoon?: boolean;
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
  status?: number;
  error?: { prompt: string };
}

export interface EmptyInterface {
  label: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
}
export interface MessageInterfaces {
  message: string;
  response: string;
}

export interface userProModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
