import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "lucide-react";
import SidebarMobile from "./SidebarMobile";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <SidebarMobile>
        <Button variant="ghost" className="md:hidden cursor-pointer">
          <Sidebar />
        </Button>
      </SidebarMobile>
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
export default Navbar;
