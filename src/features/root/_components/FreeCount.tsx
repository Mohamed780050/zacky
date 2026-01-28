"use client";
import { Max_FREE_COUNTS } from "@/data/static";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/useProModal";

function FreeCount({ freeCount }: { freeCount: number }) {
  const proModal = useProModal();
  const percentage = (freeCount / Max_FREE_COUNTS) * 100;

  return (
    <div className="bg-[#111827] px-3 py-2">
      <Card className="border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06]">
        <CardContent className="px-5 py-6">
          <div className="mb-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                Generations
              </p>
              <span className="bg-primary/10 text-primary ring-primary/20 rounded-full px-2 py-0.5 text-[0.65rem] font-bold ring-1">
                {freeCount} / {Max_FREE_COUNTS}
              </span>
            </div>
            <div className="relative">
              <Progress className="h-2 bg-white/5" value={percentage} />
              <div
                className="bg-primary/20 absolute inset-0 -z-10 blur-xl transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          <Button
            onClick={proModal.onOpen}
            className="group from-primary to-secondary shadow-primary/25 relative w-full overflow-hidden rounded-xl bg-gradient-to-r via-purple-500 px-4 py-6 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Upgrade to Pro
              <Zap className="h-4 w-4 fill-current transition-transform group-hover:rotate-12" />
            </span>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default FreeCount;
