import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarLinks from "./SidebarLinks";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FreeCountRequest from "./FreeCountRequest";

function SidebarMobile({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="bg-[#111827]">
        <SheetTitle className="hidden" />
        <SidebarLinks isADialog />
        <Suspense fallback={<Skeleton className="mx-3 h-[188px] w-full" />}>
          <FreeCountRequest />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarMobile;
