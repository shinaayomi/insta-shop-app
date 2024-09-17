"use client";

import Image from "next/image";
import React from "react";
import ShopImage from "../../assets/images/Shopping-Sale.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FilledButton from "@/components/Button/FilledButton";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[1000px] min-h-screen mx-auto flex flex-col items-center pt-8 md:pt-12 pb-6">
        <div className="w-full flex flex-col items-center text-center px-4">
          <Image
            src={ShopImage}
            alt="Welcome"
            width={296}
            height={210}
            priority
          />
          <h1 className="text-[36px] text-app-black font-bold leading-[39.6px] mt-6 mb-2">
            Welcome
          </h1>
          <p className="text-sm mb-6">
            The safest platfrom to shop from social media vendors
          </p>
          <article className="w-full grid gap-[13px] bg-[#FFEAFA] rounded-xl border-[0.5px] border-[#8A226F] px-4 py-3 mb-10">
            {[
              "Reach Millions of Shoppers",
              "Easy Product Listing",
              "Secure and Fast Payments",
              "Boost Your Visibility",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-[10px]">
                <FaRegCheckCircle color="#8A226F" />{" "}
                <p className="text-sm text-app-black font-medium">{item}</p>
              </div>
            ))}
          </article>
        </div>

        <div className="w-full border-t border-[#0000001A] pt-4 mt-auto px-4">
          <FilledButton
            onClick={() => router.push("auth/setup-profile")}
            label="Get started"
          />
        </div>
      </div>
    </div>
  );
}
