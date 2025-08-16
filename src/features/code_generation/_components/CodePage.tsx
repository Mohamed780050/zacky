import Empty from "@/features/root/_components/Empty";
import { MessageInterfaces } from "@/interfaces/interfaces";
import { CodeIcon } from "lucide-react";
import CodeMessagesAndResponse from "./CodeMessagesAndResponse";
import { getAllOfMyCode } from "@/lib/getData";

async function CodeMessages() {
  const messages: MessageInterfaces[] = await getAllOfMyCode();
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <CodeMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label="What is the code that you want me to write?"
          description="I do know how to write code with any language, just describe it below."
          icon={<CodeIcon className="h-15 w-15 text-green-700" />}
          bgColor="bg-green-700/10"
        />
      )}
    </div>
  );
}
export default CodeMessages;
