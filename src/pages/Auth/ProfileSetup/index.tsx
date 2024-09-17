"use client";

import FilledButton from "@/components/Button/FilledButton";
import Input from "@/components/Input";
import {
  GoogleIcon,
  InstagramIcon,
  InstagramOutlineIcon,
  TikTokIcon,
} from "@/util/Svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useMemo, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function ProfileSetup({ step }: { step: string }) {
  const searchUrl = useSearchParams();
  const getUrl = step ? searchUrl.get("step") : "1";
  const router = useRouter();
  const [stepper, setStepper] = useState(1);
  // const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      console.error("No file selected");
      // setImage(null);
      setImagePreview(null);
    }
  };

  useMemo(() => {
    switch (getUrl) {
      case "2":
        setStepper(2);
        break;
      case "3":
        setStepper(3);
        break;
      default:
        setStepper(1);
    }
  }, [getUrl]);

  const handleFirstContinue = () => {
    router.push("/auth/setup-profile?step=2");
    setStepper(2);
  };
  const handleSecondContinue = () => {
    router.push("/auth/setup-profile?step=3");
    setStepper(3);
  };
  const handleThirdContinue = () => {
    router.push("/product/create-product");
  };

  return (
    <div>
      <div className="max-w-[1000px] min-h-screen mx-auto flex flex-col pt-8 md:pt-12 pb-6 px-4">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => router.back()}>
            <IoMdArrowBack color="#00000099" />
          </button>
          <p className="text-app-black font-medium">Get started</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((steps, index) => (
            <div
              key={index}
              className={`h-1 rounded-[15px] ${
                stepper >= steps ? "bg-primary" : "bg-[#0000001A]"
              }`}
            />
          ))}
        </div>
        {stepper === 1 && (
          <React.Fragment>
            <h4 className="font-medium text-2xl text-app-black leading-[26.4px] mt-5">
              Enter your phone number or email to get started
            </h4>
            <p className="text-sm text-[#00000099] mt-4 mb-6">
              We will send you a verification code for confirmation
            </p>
            <Input placeholder="Enter phone number of email" />

            <div className="border-t border-[#0000001A] pt-4 mt-auto -mx-4 px-4">
              <FilledButton onClick={handleFirstContinue} label="Continue" />
            </div>
          </React.Fragment>
        )}

        {stepper === 2 && (
          <React.Fragment>
            <h4 className="font-medium text-2xl text-app-black leading-[26.4px] mt-5">
              Complete profile setup
            </h4>
            <p className="text-sm text-[#00000099] mt-4 mb-4">
              Connect your socials for quick setup
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { icon: <InstagramIcon /> },
                { icon: <TikTokIcon /> },
                { icon: <GoogleIcon /> },
              ].map((media, i) => (
                <button
                  key={i}
                  className="h-12 flex justify-center items-center bg-[#00000008] rounded-xl"
                >
                  {media.icon}
                </button>
              ))}
            </div>
            <p className="text-sm text-[#00000099] mb-4">Or enter manually</p>
            <div className="grid gap-3 mb-10">
              <Input placeholder="Full name" />
              <Input placeholder="Username" />
              <Input placeholder="Phone number" />
              <Input placeholder="Email" />
            </div>

            <div className="border-t border-[#0000001A] pt-4 mt-auto -mx-4 px-4">
              <FilledButton onClick={handleSecondContinue} label="Continue" />
            </div>
          </React.Fragment>
        )}

        {stepper === 3 && (
          <React.Fragment>
            {/* start upload image */}
            <div className="h-[140px] flex flex-col items-center justify-center gap-3 border-[0.5px] border-[#00000033] rounded-xl mb-2 mt-5">
              {imagePreview ? (
                <div>
                  <Image
                    src={imagePreview}
                    className="w-20 h-20 rounded-full object-cover"
                    alt="Logo"
                    width={80}
                    height={80}
                    quality={100}
                    priority
                  />
                </div>
              ) : (
                <>
                  <div className="relative w-20 h-20 grid place-items-center bg-[url(/images/default-profile.png)] bg-no-repeat bg-cover rounded-full">
                    <div>
                      <InstagramOutlineIcon />
                    </div>
                    <input
                      type="file"
                      className="absolute top-0 left-0 bottom-0 right-0 z-10 opacity-0"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <p className="text-xs text-[#00000066]">Upload store logo</p>
                </>
              )}
            </div>
            {/* end upload image */}
            <div className="grid gap-3 mb-10">
              <Input placeholder="Store name" />
              <Input placeholder="Store tag name" />
              <Input placeholder="Store phone number" />
              <Input placeholder="Store email" />
              <Input placeholder="Category" />
            </div>

            <div className="border-t border-[#0000001A] pt-4 mt-auto -mx-4 px-4">
              <FilledButton onClick={handleThirdContinue} label="Continue" />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
