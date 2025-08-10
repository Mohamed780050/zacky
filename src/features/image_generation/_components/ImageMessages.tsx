import Empty from "@/features/root/_components/Empty";
import { ImageIcon } from "lucide-react";

function ImageMessages() {
  return (
    <div>
      <Empty
        label="What is the image that you want me to create?"
        description="Start describing your image below."
        icon={<ImageIcon className="h-15 w-15 text-pink-500" />}
        bgColor="bg-pink-500/10"
      />
    </div>
  );
}
export default ImageMessages;
