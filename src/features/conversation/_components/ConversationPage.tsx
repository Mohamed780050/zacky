import Empty from "@/features/root/_components/Empty";
import { MessageSquare } from "lucide-react";
import ConversationMessagesAndResponse from "./ConversationMessagesAndResponse";

function ConversationPage() {
  const messages = [{ message: "Hello i am using you zacky", response: "welcome" }];
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <ConversationMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label="How can I help you today?"
          description="Start a conversation by typing a message below."
          icon={<MessageSquare className="h-15 w-15 text-violet-500" />}
          bgColor="bg-violet-500/10"
        />
      )}
    </div>
  );
}
export default ConversationPage;
