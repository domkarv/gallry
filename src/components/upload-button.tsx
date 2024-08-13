"use client";

import { UploadIcon } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { uploadImage } from "~/server/image-actions";
import { Button } from "./ui/button";

export function UploadButton({ groupId }: { groupId: string }) {
  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset="next_cloudinary_preset"
        onSuccess={async (res) => {
          await uploadImage({ info: res.info, groupId });
        }}
        className="gap-2 mix-blend-difference"
      >
        <UploadIcon className="size-4" /> Upload Images
      </CldUploadButton>
    </Button>
  );
}
