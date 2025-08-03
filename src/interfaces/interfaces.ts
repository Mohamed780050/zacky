import { ReactNode } from "react";

export interface SidebarLinksInterface {
  label: string;
  href: string;
  icon: ReactNode;
  bgColor?: string;
}
