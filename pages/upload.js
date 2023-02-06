import React from "react";
import Image from "next/image";
import UploadPic from "./components/assets/upload.svg";

export const Upload = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image src={UploadPic} layout="fill" objectFit="containt" />
    </div>
  );
};

export default Upload;
