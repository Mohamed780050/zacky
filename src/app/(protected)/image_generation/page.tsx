import ImageForm from "@/features/image_generation/_components/ImageForm";
import ImageMessages from "@/features/image_generation/_components/ImageMessages";
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
      <ImageMessages />
      <div className="px-4 lg:px-8">
        <ImageForm />
      </div>
    </div>
  );
}
export default page;
