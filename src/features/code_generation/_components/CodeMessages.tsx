import Empty from "@/features/root/_components/Empty";
import { CodeIcon } from "lucide-react";

function CodeMessages() {
  return (
    <div>
      <Empty
        label="What is the code that you want me to write?"
        description="I do know how to write code with any language, just describe it below."
        icon={<CodeIcon className="h-15 w-15 text-green-700" />}
        bgColor="bg-green-700/10"
      />
    </div>
  );
}
export default CodeMessages;
