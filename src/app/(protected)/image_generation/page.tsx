import Heading from "@/features/root/_components/Heading";
import { ImageIcon } from "lucide-react";

function page() {
  return (
    <div>
      <Heading
        title="Image Generation"
        description="Generate images using Zacky Advanced AI."
        icon={<ImageIcon className="h-10 w-10 text-pink-500" />}
        bgColor="bg-pink-500/10"
      />
    </div>
  );
}
export default page;
