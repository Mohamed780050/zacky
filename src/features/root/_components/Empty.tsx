import { EmptyInterface } from "@/interfaces/interfaces";
import { cn } from "@/lib/utils";

function Empty({ label, description, icon, bgColor }: EmptyInterface) {
  return (
    <div className="mt-40 flex w-full flex-col items-center justify-center p-4 text-center">
      <div className={cn(`rounded-full p-4`, bgColor)}>{icon}</div>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">{label}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
export default Empty;
