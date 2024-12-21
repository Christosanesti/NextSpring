import { Button } from "flowbite-react";
import { CardComp } from "./CardComp";
import { DiscountCarousel } from "./DiscountCarousel";

export function SpecialCarousel() {
  return (
    <div className="px-8 pt-6">
      <span className="font-bold text-[#db4444] flex " dir="rtl">
        <div className="border border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
        <span className="">روزانه</span>
      </span>
      <span
        className="text-2xl text-black font-extrabold py-[10px] flex gap-10"
        dir="rtl"
      >
        <span className="ml-20">فروش فوق العاده</span>
        <span dir="rtl">
          <p className="text-sm py-1">ثانیه</p>
          <p className="border border-gray-100">18</p>
        </span>
        <span dir="rtl">
          <p className="text-sm py-1">دقیقه</p>
          <p className="border border-gray-100">16</p>
        </span>
        <span dir="rtl">
          <p className="text-sm py-1">ساعت</p>
          <p className="border border-gray-100">14</p>
        </span>
        <span dir="rtl">
          <p className="text-sm py-1">روز</p>
          <p className="border border-gray-100">03</p>
        </span>
      </span>

      <div>
        <DiscountCarousel />
      </div>
      <Button className="bg-[#ed4444] my-6 mx-auto">بازدید از محصولات</Button>
      <hr className="gray-100" />
    </div>
  );
}
