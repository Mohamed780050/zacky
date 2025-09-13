import { Max_FREE_COUNTS } from "@/data/static";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

function FreeCount({ freeCount }: { freeCount: number }) {
  return (
    <div className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <Progress
              className="h-3 bg-white"
              value={(freeCount / Max_FREE_COUNTS) * 100}
            />
            <p>
              {freeCount} / {Max_FREE_COUNTS} Free Generations.
            </p>
          </div>
          <Button variant="premium" className="w-full cursor-pointer">
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default FreeCount;
