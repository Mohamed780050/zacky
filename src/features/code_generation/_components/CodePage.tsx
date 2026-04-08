import Empty from "@/features/root/_components/Empty";
import { MessageInterfaces } from "@/interfaces/interfaces";
import { CodeIcon } from "lucide-react";
import CodeMessagesAndResponse from "./CodeMessagesAndResponse";
import { getAllOfMyCode } from "@/lib/getData";
import { getTranslations } from "next-intl/server";

async function CodeMessages() {
  const t = await getTranslations("CodeGeneration");
  const messages: MessageInterfaces[] = await getAllOfMyCode();
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <CodeMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label={t("emptyLabel")}
          description={t("emptyDescription")}
          icon={<CodeIcon className="h-15 w-15 text-green-700" />}
          bgColor="bg-green-700/10"
        />
      )}
    </div>
  );
}
export default CodeMessages;
