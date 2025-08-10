import Heading from "@/features/root/_components/Heading";
import VideoForm from "@/features/video_generation/_components/VideoForm";
import VideoMessages from "@/features/video_generation/_components/VideoMessages";
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
      <VideoMessages />
      <div className="px-4 lg:px-8">
        <VideoForm />
      </div>
    </div>
  );
}
export default page;
