import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="px-8 pt-4">
      <span className="font-bold text-[#db4444] flex " dir="rtl">
        <div className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-6"></div>
        <span className="">برترین ها</span>
      </span>
      <span
        className="text-2xl text-black font-extrabold py-[8px] flex gap-10"
        dir="rtl"
      >
        <span className="ml-20">تازه ترین ها</span>
      </span>

      <div className="w-[90%] mx-auto flex gap-5 h-1/2">
        <div className="flex-1">
          <img
            className="w-full h-1/2 object-cover"
            src="/last2.jpg"
            alt="Last 2"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <img
              src="/last1.jpg"
              alt="Last 1"
              className="w-full h-1/4 object-cover"
            />
            <div className="flex-1 flex gap-5 pt-4 h-1/2 ">
              <div className="flex-1 ">
                <img
                  src="/last3.jpg"
                  alt="Last 3"
                  className="w-full h-1/2 object-cover"
                />
              </div>
              <div className="flex-1 ">
                <img
                  src="/last4.jpg"
                  alt="Last 4"
                  className="w-full h-1/2 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
