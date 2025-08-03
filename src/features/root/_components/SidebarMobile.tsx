"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarLinks from "./SidebarLinks";
import { useState } from "react";

function SidebarMobile({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="hidden"/>
        <SidebarLinks setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
}
export default SidebarMobile;
