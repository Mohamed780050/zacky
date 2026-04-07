import ImageForm from "@/features/image_generation/_components/ImageForm";
import Heading from "@/features/root/_components/Heading";
import { ImageIcon } from "lucide-react";
import ImagePage from "@/features/image_generation/_components/ImagePage";

function page() {
  return (
    <div>
      <Heading
        title="Image Generation"
        description="Generate images using Zacky Advanced AI."
        icon={<ImageIcon className="h-10 w-10 text-fuchsia-600" />}
        bgColor="bg-fuchsia-600/10"
      />
      <ImagePage />
      <div className="px-4 lg:px-8">
        <ImageForm />
      </div>
    </div>
  );
}
export default page;
