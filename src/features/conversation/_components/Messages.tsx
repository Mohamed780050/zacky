import Empty from "@/features/root/_components/Empty";
import { MessageSquare } from "lucide-react";

function Messages() {
  return (
    <div>
      <Empty
        label="How can I help you today?"
        description="Start a conversation by typing a message below."
        icon={<MessageSquare className="h-15 w-15 text-violet-500" />}
        bgColor="bg-violet-500/10"
      />
    </div>
  );
}
export default Messages;
