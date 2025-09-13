import { Limitation } from "@/lib/api-limit";
import FreeCount from "./FreeCount";

async function FreeCountRequest() {
  const freeCounts = await Limitation();
  if (freeCounts === null) return;
  return <FreeCount freeCount={freeCounts.count} />;
}
export default FreeCountRequest;
