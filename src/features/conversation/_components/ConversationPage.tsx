import Empty from "@/features/root/_components/Empty";
import { MessageSquare } from "lucide-react";
import ConversationMessagesAndResponse from "./ConversationMessagesAndResponse";
import { getAllConversation } from "@/lib/getData";
import { MessageInterfaces } from "@/interfaces/interfaces";
import { getTranslations } from "next-intl/server";

async function ConversationPage() {
  const t = await getTranslations("Conversation");
  const messages: MessageInterfaces[] = await getAllConversation();
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <ConversationMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label={t("emptyLabel")}
          description={t("emptyDescription")}
          icon={<MessageSquare className="h-15 w-15 text-violet-500" />}
          bgColor="bg-violet-500/10"
        />
      )}
    </div>
  );
}
export default ConversationPage;
