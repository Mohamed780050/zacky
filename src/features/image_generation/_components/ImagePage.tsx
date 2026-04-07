import Empty from "@/features/root/_components/Empty";
import { ImageIcon } from "lucide-react";
import { getAllOfMyImages } from "@/lib/getData";
import ImageMessagesAndResponse from "./ImageMessagesAndResponse";

async function ImagePage() {
  const messages = await getAllOfMyImages();
  
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <ImageMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label="What is the image that you want me to create?"
          description="I can generate images for you, just describe it below."
          icon={<ImageIcon className="h-15 w-15 text-fuchsia-600" />}
          bgColor="bg-fuchsia-600/10"
        />
      )}
    </div>
  );
}

export default ImagePage;
