import Heading from "@/features/root/_components/Heading";
import { VideoIcon } from "lucide-react";

function page() {
  return (
    <div>
      <Heading
        title="Video Generation"
        description="Generate videos using Zacky Advanced AI."
        icon={<VideoIcon className="h-10 w-10 text-orange-700" />}
        bgColor="bg-orange-700/10"
      />
    </div>
  );
}
export default page;
