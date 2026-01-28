import { Suspense } from "react";
import SidebarLinks from "./SidebarLinks";
import FreeCountSkeleton from "./FreeCountSkeleton";
import FreeCountRequest from "./FreeCountRequest";

function Sidebar() {
  return (
    <div className="border-sidebar-border bg-sidebar/50 hidden h-full border-r backdrop-blur-xl md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
      <SidebarLinks />
      <Suspense fallback={<FreeCountSkeleton />}>
        <FreeCountRequest />
      </Suspense>
    </div>
  );
}
export default Sidebar;
