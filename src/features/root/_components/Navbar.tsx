import { UserButton } from "@clerk/nextjs";
import SidebarMobile from "./SidebarMobile";

function Navbar() {
  return (
    <div className="bg-background/50 border-primary/10 sticky top-0 z-50 flex items-center border-b p-4 backdrop-blur-sm">
      <SidebarMobile />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
export default Navbar;
