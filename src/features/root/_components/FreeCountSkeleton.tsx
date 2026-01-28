import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FreeCountSkeleton() {
  return (
    <div className="bg-[#111827] px-3 py-2">
      <Card className="border-0 bg-transparent">
        <CardContent className="py-6">
          <div className="mb-4 space-y-3">
            {/* Progress bar skeleton */}
            <Skeleton className="h-3 w-full bg-white/10" />
            {/* Text skeleton */}
            <Skeleton className="mx-auto h-4 w-3/4 bg-white/10" />
          </div>
          {/* Button skeleton */}
          <Skeleton className="h-10 w-full rounded-md bg-white/10" />
        </CardContent>
      </Card>
    </div>
  );
}
