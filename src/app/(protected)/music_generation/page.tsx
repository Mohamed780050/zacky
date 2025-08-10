import MusicForm from "@/features/music_generation/_components/MusicForm";
import MusicMessages from "@/features/music_generation/_components/MusicMessages";
import Heading from "@/features/root/_components/Heading";
import { MusicIcon } from "lucide-react";

function page() {
  return (
    <div>
      <Heading
        title="Music Generation"
        description="Generate Music using Zacky Advanced AI."
        icon={<MusicIcon className="h-10 w-10 text-emerald-500" />}
        bgColor="bg-emerald-500/10"
      />
      <MusicMessages />
      <div className="px-4 lg:px-8">
        <MusicForm />
      </div>
    </div>
  );
}
export default page;
