import Message from "../../../components/Message";
import Image from "next/image";

interface ImageMessageInterface {
  description: string | null;
  imageUrl: string;
}

function ImageMessagesAndResponse({
  messages,
}: {
  messages: ImageMessageInterface[];
}) {
  return (
    <ul className="pb-32">
      {messages.map((item, index) => (
        <li key={index} className="flex flex-col">
          <Message
            message={item.description || "Generate an image"}
            className="bg-fuchsia-600 hover:bg-fuchsia-700"
          />
          
          <div className="bg-muted/50 text-foreground mb-4 max-w-[calc(100%-40px)] self-start overflow-hidden rounded-2xl p-2 shadow-sm backdrop-blur-sm sm:max-w-1/2">
            <div className="relative aspect-square w-full sm:w-[400px]">
              <Image 
                src={item.imageUrl} 
                alt={item.description || "Generated Image"} 
                fill
                className="rounded-xl object-cover"
                unoptimized
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageMessagesAndResponse;
