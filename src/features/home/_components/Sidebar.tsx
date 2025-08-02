import SidebarLinks from "./SidebarLinks";

function Sidebar() {
  return (
    <div className="h-full hidden md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
      <SidebarLinks />
    </div>
  );
}
export default Sidebar;
