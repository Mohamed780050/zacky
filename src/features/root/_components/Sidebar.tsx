import { Suspense } from "react";
import SidebarLinks from "./SidebarLinks";
import { Skeleton } from "@/components/ui/skeleton";
import FreeCountRequest from "./FreeCountRequest";

function Sidebar() {
  return (
    <div className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
      <SidebarLinks />
      <Suspense fallback={<Skeleton className="mx-3 h-[188px] w-[264px]" />}>
        <FreeCountRequest />
      </Suspense>
    </div>
  );
}
export default Sidebar;
