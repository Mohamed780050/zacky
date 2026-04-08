import CodeForm from "@/features/code_generation/_components/CodeForm";
import CodeMessages from "@/features/code_generation/_components/CodePage";
import Heading from "@/features/root/_components/Heading";
import { CodeIcon } from "lucide-react";

function page() {
  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using Zacky Advanced AI."
        icon={<CodeIcon className="h-10 w-10 text-green-700" />}
        bgColor="bg-green-700/10"
      />
      <CodeMessages />
      <div className="px-4 lg:px-8">
        <CodeForm />
      </div>
    </div>
  );
}
export default page;
