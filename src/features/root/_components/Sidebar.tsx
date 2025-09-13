import { Suspense } from "react";
import SidebarLinks from "./SidebarLinks";
import { Skeleton } from "@/components/ui/skeleton";
import FreeCountRequest from "./FreeCountRequest";

function Sidebar() {
  return (
    <div className="h-full hidden md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
      <SidebarLinks />
      <Suspense fallback={<Skeleton className="mx-3 h-[188px] w-[264px]" />}>
        <FreeCountRequest />
      </Suspense>
    </div>
  );
}
export default Sidebar;
