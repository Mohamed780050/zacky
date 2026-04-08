import Empty from "@/features/root/_components/Empty";
import { ImageIcon } from "lucide-react";
import { getAllOfMyImages } from "@/lib/getData";
import ImageMessagesAndResponse from "./ImageMessagesAndResponse";
import { getTranslations } from "next-intl/server";

async function ImagePage() {
  const t = await getTranslations("ImageGeneration");
  const messages = await getAllOfMyImages();
  
  return (
    <div className="px-4 lg:px-8">
      {messages.length ? (
        <ImageMessagesAndResponse messages={messages} />
      ) : (
        <Empty
          label={t("emptyLabel")}
          description={t("emptyDescription")}
          icon={<ImageIcon className="h-15 w-15 text-fuchsia-600" />}
          bgColor="bg-fuchsia-600/10"
        />
      )}
    </div>
  );
}

export default ImagePage;
