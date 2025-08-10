import Empty from "@/features/root/_components/Empty";
import { Music } from "lucide-react";

function MusicMessages() {
  return (
    <div>
      <Empty
        label="What code do you need assistance with?"
        description="Ask Zacky to generate code for you."
        icon={<Music className="h-15 w-15 text-emerald-500" />}
        bgColor="bg-emerald-500/10"
      />
    </div>
  );
}
export default MusicMessages;
