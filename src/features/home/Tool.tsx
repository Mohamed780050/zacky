import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import ComingSoonBanner from "./ComingSoonBanner";

function Tool({
  bgColor,
  icon,
  label,
  isComingSoon,
  isChecked,
}: {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
  isComingSoon?: boolean;
  isChecked?: boolean;
}) {
  return (
    <Card
      className={`relative flex flex-row items-center justify-between border-black/5 p-4 transition hover:shadow-sm ${!isComingSoon && "cursor-pointer"}`}
    >
      <div className="flex items-center gap-x-4">
        <div className={cn("w-fit rounded-md p-2", bgColor)}>{icon}</div>
        <div className="font-semibold">{label}</div>
      </div>
      {isComingSoon ? (
        <div className={`${isChecked && "hidden"}`}>
          <ComingSoonBanner />
        </div>
      ) : (
        <ArrowRight className={`${isChecked && "hidden"} h-5 w-5`} />
      )}
      {isChecked && <Check />}
    </Card>
  );
}
export default Tool;
