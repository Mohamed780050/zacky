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

import { Button } from "@/components/ui/button";
import { Sidebar } from "lucide-react";

function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="cursor-pointer md:hidden">
          <Sidebar />
        </Button>
      </SheetTrigger>
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
