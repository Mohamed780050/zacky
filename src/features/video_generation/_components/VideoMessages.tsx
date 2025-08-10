import Empty from "@/features/root/_components/Empty";
import { VideoIcon } from "lucide-react";

function VideoMessages() {
  return (
    <div>
      <Empty
        label="What is the video that you want me to make?"
        description="I can make any video you want, just write below."
        icon={<VideoIcon className="h-15 w-15 text-orange-700" />}
        bgColor="bg-orange-700/10"
      />
    </div>
  );
}
export default VideoMessages;
