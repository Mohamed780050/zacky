import { Limitation } from "@/lib/api-limit";
import FreeCount from "./FreeCount";
import { isProSubscription } from "@/lib/getSubscription";

async function FreeCountRequest() {
  const hasProSubscription = await isProSubscription();
  if (hasProSubscription) return;
  const freeCounts = await Limitation();
  if (freeCounts === null) return;
  return <FreeCount freeCount={freeCounts.count} />;
}
export default FreeCountRequest;
