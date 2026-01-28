import { Suspense } from "react";
import SidebarLinks from "./SidebarLinks";
import { Skeleton } from "@/components/ui/skeleton";
import FreeCountRequest from "./FreeCountRequest";

function Sidebar() {
  return (
    <div className="border-sidebar-border bg-sidebar/50 hidden h-full border-r backdrop-blur-xl md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
      <SidebarLinks />
      <Suspense fallback={<Skeleton className="mx-3 h-[188px] w-[264px]" />}>
        <FreeCountRequest />
      </Suspense>
    </div>
  );
}
export default Sidebar;
