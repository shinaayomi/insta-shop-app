"use client";

import FilledButton from "@/components/Button/FilledButton";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import PreviewProductImg from "../../assets/images/PRODUCTIMAGE.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { PiShareFatThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";

export default function ProductPreview() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[1000px] min-h-screen mx-auto flex flex-col pt-8 md:pt-12 pb-6 px-4">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => router.back()}>
            <IoMdArrowBack color="#00000099" />
          </button>
          <p className="text-app-black font-medium">Product preview</p>
          <button className="ml-auto">
            <BsThreeDotsVertical />
          </button>
        </div>
        <Image
          src={PreviewProductImg}
          alt="Product"
          className="w-full"
          width={360}
          height={360}
          priority
        />
        <div className="flex items-center justify-between gap-8 mt-4 mb-10">
          <p className="text-sm text-black font-medium">
            Gucci bag – the epitome of luxury and sophistication
          </p>
          <div className="flex items-center gap-2">
            <button className="grid place-items-center w-9 h-9 bg-[#0000000D] rounded-full">
              <PiShareFatThin color="#00000099" />
            </button>
            <button className="grid place-items-center w-9 h-9 bg-[#0000000D] rounded-full">
              <IoIosHeartEmpty color="#00000099" />
            </button>
          </div>
        </div>
        <div className="border-t border-[#0000001A] pt-4 mt-auto -mx-4 px-4">
          <FilledButton
            // onClick={() => router.push("auth/setup-profile")}
            className="mt-auto"
            label="Publish"
          />
        </div>
      </div>
    </div>
  );
}
