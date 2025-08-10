import Empty from "@/features/root/_components/Empty";
import { Music } from "lucide-react";

function MusicMessages() {
  return (
    <div>
      <Empty
        label="What kind of music do you want to hear?"
        description="I can generate any music you like, just tell me."
        icon={<Music className="h-15 w-15 text-emerald-500" />}
        bgColor="bg-emerald-500/10"
      />
    </div>
  );
}
export default MusicMessages;
