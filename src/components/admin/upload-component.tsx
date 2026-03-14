"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { toast } from "react-toastify";

export function UploadComponent({ onUpload }: { onUpload: (url: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-between p-4 border border-dashed rounded-lg bg-gray-50">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            onUpload(res[0].url);
            toast.success("Upload Completed!");
          }
        }}
        onUploadError={(error: Error) => {
          toast.error(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
