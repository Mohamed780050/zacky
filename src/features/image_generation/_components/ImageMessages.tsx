import Empty from "@/features/root/_components/Empty";
import { ImageIcon } from "lucide-react";

function ImageMessages() {
  return (
    <div>
      <Empty
        label="How can I help you today?"
        description="Start a conversation by typing a message below."
        icon={<ImageIcon className="h-15 w-15 text-pink-500" />}
        bgColor="bg-pink-500/10"
      />
    </div>
  );
}
export default ImageMessages;
