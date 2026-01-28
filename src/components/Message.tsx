import { cn } from "@/lib/utils";

function Message({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground mb-4 max-w-[calc(100%-30px)] self-end rounded-2xl rounded-tr-sm p-4 text-wrap break-words shadow-sm sm:max-w-[calc(80%-20px)]",
        className,
      )}
    >
      {message}
    </div>
  );
}
export default Message;
