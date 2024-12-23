import React from "react";

const FeaturedBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-80 py-9 my-9 w-[80%] mx-auto"
      style={{ backgroundImage: "url('/banner.jpg')", transform: "scaleX(-1)" }}
    >
      <div
        className="absolute inset-0 bg-black opacity-85"
        dir="rtl"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="relative z-10 p-6 text-white mx-6 gap-2 my-8">
          <h2 className="text-2xl font-bold text-[#ed4444]">زیبایی هدیه است</h2>
          <p className="mt-2 text-right">زیبا ماندن یک هنر...</p>
          <div className="py-6">
            <span className="bg-white rounded-full px-3 py-4 text-[#ed4444] mx-2 top-6 font-bold">
              <span className="mx-1">23</span>
            </span>
            :
            <span className=" bg-white rounded-full px-3 py-4 text-[#ed4444] mx-2 font-bold">
              <span className="mx-1">06</span>
            </span>
            :
            <span className=" bg-white rounded-full px-3 py-4 text-[#ed4444] mx-2 font-bold">
              <span className="mx-1">16</span>
            </span>
          </div>
          <button className="mt-4  bg-[#ed4444] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
