"use client";

import FilledButton from "@/components/Button/FilledButton";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack, IoMdCheckmark } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import LabeledInput from "@/components/Input/LabeledInput";
import Input from "@/components/Input";
import { LuImagePlus } from "react-icons/lu";

export default function CreateProduct() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[1000px] min-h-screen mx-auto flex flex-col pt-8 md:pt-12 pb-6 px-4">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => router.back()}>
            <IoMdArrowBack color="#00000099" />
          </button>
          <p className="text-app-black font-medium">Create a product</p>
          <button className="ml-auto">
            <BsThreeDotsVertical />
          </button>
        </div>

        <div className="flex justify-between">
          <p className="flex items-center gap-2 text-[#00000099] text-xs font-medium border border-[#0000001A] rounded-[90px] p-[2px_6px]">
            Draft <IoMdCheckmark />
          </p>
          <button className="text-primary text-xs font-medium">
            Preview product
          </button>
        </div>

        <article className="border-t border-[#0000001A] mt-3 pt-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-black text-sm">Basic details</p>
            <HiOutlineChevronDown />
          </div>
          <div className="grid gap-[10px]">
            <Input placeholder="Product Title" />
            <LabeledInput label="Product description" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Price" />
              <Input placeholder="Old price" />
            </div>
            <LabeledInput label="Product collection" />
            <Input placeholder="Inventory stocks" />
          </div>
        </article>

        <article className="border-t border-[#0000001A] mt-3 pt-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-black text-sm">Product images</p>
            <HiOutlineChevronDown />
          </div>
          <FilledButton
            label="Add image"
            placeIcon="end"
            grayed
            icon={<LuImagePlus />}
          />
        </article>

        <article className="border-t border-[#0000001A] mt-3 pt-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-black text-sm">Inventory variations</p>
            <HiOutlineChevronDown />
          </div>
          <label
            htmlFor="material"
            className="flex items-center gap-2 text-[#00000099] text-sm"
          >
            <input
              type="checkbox"
              className="text accent-primary"
              name="material"
              id=""
            />
            <span>
              This product is variable; has different colors, sizes, weight,
              materials, etc.
            </span>
          </label>
        </article>

        <article className="border-t border-[#0000001A] mt-3 pt-3 mb-14">
          <div className="flex items-center justify-between mb-4">
            <p className="text-black text-sm">Shipping</p>
            <HiOutlineChevronDown />
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="material"
              className="flex justify-between items-center gap-2 text-[#00000099] text-sm"
            >
              <span>Self shipping</span>
              <input
                type="checkbox"
                className="text accent-primary"
                name="material"
                id=""
              />
            </label>
            <label
              htmlFor="material"
              className="flex justify-between items-center gap-2 text-[#00000099] text-sm"
            >
              <span>InstaShop shipping</span>
              <input
                type="checkbox"
                className="text accent-primary"
                name="material"
                id=""
              />
            </label>
            <Input placeholder="Inventory stocks" />
          </div>
        </article>

        <div className="grid grid-cols-2 gap-[10px] border-t border-[#0000001A] pt-4 mt-auto -mx-4 px-4">
          <FilledButton outlined label="Cancel" />
          <FilledButton
            onClick={() => router.push("/product/preview-product")}
            label="Save"
          />
        </div>
      </div>
    </div>
  );
}
