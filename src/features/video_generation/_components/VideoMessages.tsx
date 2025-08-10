import Empty from "@/features/root/_components/Empty";
import { VideoIcon } from "lucide-react";

function VideoMessages() {
  return (
    <div>
      <Empty
        label="What code do you need assistance with?"
        description="Ask Zacky to generate Video for you."
        icon={<VideoIcon className="h-15 w-15 text-orange-700" />}
        bgColor="bg-orange-700/10"
      />
    </div>
  );
}
export default VideoMessages;
