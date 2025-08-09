import ConversationForm from "@/features/conversation/_components/ConversationForm";
import Heading from "@/features/root/_components/Heading";
import { MessageSquare } from "lucide-react";

function page() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="talk with Zacky Advanced AI conversational agent."
        icon={<MessageSquare className="h-10 w-10 text-violet-500" />}
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <ConversationForm />
      </div>
    </div>
  );
}
export default page;
