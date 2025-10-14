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
export interface testimonialsInterface {
  name: string;
  avatar: string;
  title: string;
  description: string;
}
export interface ImageActionStateInterface {
  errors?: {
    prompt?: string[];
  };
  message?: string | null;
  error?: { prompt: string };
}
export interface AudioActionStateInterface {
  errors?: {
    prompt?: string[];
  };
  message?: string | null;
  error?: { prompt: string };
}
export interface VideoActionStateInterface {
  errors?: {
    prompt?: string[];
  };
  message?: string | null;
  error?: { prompt: string };
}