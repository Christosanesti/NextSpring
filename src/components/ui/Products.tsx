import React from "react";
import ProductsCarousel from "./ProductsCarousel";
import { Button } from "flowbite-react";

const Products = () => {
  return (
    <div className="px-8 pt-6">
      <span className="font-bold text-[#db4444] flex " dir="rtl">
        <div className="border border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
        <span className="">محصولات </span>
      </span>
      <span
        className="text-2xl text-black font-extrabold py-[10px] flex gap-10"
        dir="rtl"
      >
        <span className="ml-20">جستجو در محصولات مختلف</span>
      </span>
      <ProductsCarousel />

      <Button className="bg-[#ed4444] hover:bg-white my-5 mx-auto">
        نمایش کلیه محصولات
      </Button>
    </div>
  );
};

export default Products;
