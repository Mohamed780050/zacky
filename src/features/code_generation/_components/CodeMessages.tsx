import Empty from "@/features/root/_components/Empty";
import { CodeIcon } from "lucide-react";

function CodeMessages() {
  return (
    <div>
      <Empty
        label="What code do you need assistance with?"
        description="Ask Zacky to generate code for you."
        icon={<CodeIcon className="h-15 w-15 text-green-700" />}
        bgColor="bg-green-700/10"
      />
    </div>
  );
}
export default CodeMessages;
