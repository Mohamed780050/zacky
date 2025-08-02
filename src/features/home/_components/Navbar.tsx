import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" className="md:hidden cursor-pointer">
        <Sidebar />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
export default Navbar;
