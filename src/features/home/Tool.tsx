import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function Tool({
  bgColor,
  icon,
  label,
}: {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="flex cursor-pointer flex-row items-center justify-between border-black/5 p-4 transition hover:shadow-sm">
      <div className="flex items-center gap-x-4">
        <div className={cn("w-fit rounded-md p-2", bgColor)}>{icon}</div>
        <div className="font-semibold">{label}</div>
      </div>
      <ArrowRight className="h-5 w-5" />
    </Card>
  );
}
export default Tool;
