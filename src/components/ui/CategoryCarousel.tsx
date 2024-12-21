import { Baby, Headphones, Phone } from "lucide-react";
import React from "react";
import { FaFemale, FaHeadphones, FaMale } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";

const CategoryCarousel = () => {
  return (
    <div className="px-8 pt-6">
      <span className="font-bold text-[#db4444] flex " dir="rtl">
        <div className="border border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
        <span className="">دسته بندی ها</span>
      </span>
      <span
        className="text-2xl text-black font-extrabold py-[10px] flex gap-10"
        dir="rtl"
      >
        <span className="ml-20">انتخاب دسته بندی</span>
      </span>
      <span className="flex flex-row gap-8 mx-auto items-center justify-center">
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <FaHeadphones size={25} />
        </div>
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <FaFemale size={25} />
        </div>
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <FaMale size={25} />
        </div>
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <Baby size={25} />
        </div>
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <GiLipstick size={25} />
        </div>
        <div className="border border-gray-400 p-9 hover:bg-[#ed4444] hover:cursor-pointer flex-col flex">
          <MdSportsBasketball size={25} />
        </div>
      </span>
    </div>
  );
};

export default CategoryCarousel;
