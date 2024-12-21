import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="px-8 pt-6">
      <span className="font-bold text-[#db4444] flex " dir="rtl">
        <div className="border border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
        <span className="">برترین ها</span>
      </span>
      <span
        className="text-2xl text-black font-extrabold py-[10px] flex gap-10"
        dir="rtl"
      >
        <span className="ml-20">تازه ترین ها</span>
      </span>

      <div className="w-[90%] mx-auto justify-between gap-5">
        <img
          className="relative"
          style={{ backgroundImage: "url('/last2.jpg')" }}
        >
          <div className="absolute bg-black opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-5xl font-bold">تازه ترین ها</span>
          </div>
        </img>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default NewArrivals;
