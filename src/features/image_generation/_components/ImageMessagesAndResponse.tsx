"use client";

import Message from "../../../components/Message";
import Image from "next/image";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageMessageInterface {
  description: string | null;
  imageUrl: string;
}

function ImageMessagesAndResponse({
  messages,
}: {
  messages: ImageMessageInterface[];
}) {
  const downloadImage = async (url: string, description: string | null) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      
      // Sanitizing description for the file name
      const safeName = description 
        ? description.replace(/[^a-z0-9]/gi, '_').substring(0, 30).toLowerCase() 
        : "generated_image";
        
      link.download = `${safeName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <ul className="pb-32">
      {messages.map((item, index) => (
        <li key={index} className="flex flex-col">
          <Message
            message={item.description || "Generate an image"}
            className="bg-fuchsia-600 hover:bg-fuchsia-700"
          />
          
          <div className="bg-muted/50 text-foreground mb-4 max-w-[calc(100%-40px)] self-start overflow-hidden rounded-2xl p-2 shadow-sm backdrop-blur-sm sm:max-w-1/2">
            <div className="group relative aspect-square w-full sm:w-[400px]">
              <Image 
                src={item.imageUrl} 
                alt={item.description || "Generated Image"} 
                fill
                className="rounded-xl object-cover"
                unoptimized
              />
              
              {/* Hover Overlay with Download Button */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                <Button 
                  onClick={() => downloadImage(item.imageUrl, item.description)}
                  variant="secondary" 
                  size="icon" 
                  className="h-12 w-12 rounded-full transition-transform hover:scale-110 active:scale-95"
                >
                  <DownloadIcon className="h-5 w-5" />
                </Button>
              </div>

            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageMessagesAndResponse;
