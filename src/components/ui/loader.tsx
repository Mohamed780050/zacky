import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const Loader = ({ className, size = 24, ...props }: LoaderProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center p-4",
        className,
      )}
      {...props}
    >
      <Loader2
        className={cn("text-primary animate-spin", className)}
        size={size}
      />
    </div>
  );
};
