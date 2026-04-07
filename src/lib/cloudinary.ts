import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "deuwdnrzr",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadBase64Image(base64Str: string): Promise<string> {
  try {
    // Check if it already has the data URI scheme
    const formattedStr = base64Str.startsWith("data:image")
      ? base64Str
      : `data:image/png;base64,${base64Str}`;

    const uploadResponse = await cloudinary.uploader.upload(formattedStr, {
      folder: "zacky_ai_images",
    });
    
    return uploadResponse.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}
