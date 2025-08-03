import { HeadingProps } from "@/interfaces/interfaces";
import { cn } from "@/lib/utils";

function Heading({ title, description, icon, bgColor }: HeadingProps) {
  return (
    <div className="mb-3 flex items-center gap-x-3 px-4 lg:px-8">
      <div className={cn("w-fit rounded-md p-2", bgColor)}>{icon}</div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
export default Heading;
