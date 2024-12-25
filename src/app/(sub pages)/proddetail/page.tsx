import ProductDetails from "@/components/ui/ProductDetails";
import React from "react";
import ProductReview from "@/components/ui/ProductReview";
import RatingFlowBite from "@/components/ui/RatingFlowBite";
import CommentSlider from "@/components/ui/CommentSlider";
import CategoryCarousel from "@/components/ui/CategoryCarousel";
import { DiscountCarousel } from "@/components/ui/DiscountCarousel";
const page = () => {
  return (
    <>
      <div>
        <ProductDetails
          name="Product Name"
          description="This is a description of the product."
          price={19.99}
          image="https://example.com/product-image.jpg"
          rating={4.5}
          comments={[
            { author: "John Doe", text: "Great product!" },
            { author: "Jane Smith", text: "I love it!" },
          ]}
        />
      </div>
      <div className="w-[90%] mx-auto flex flex-col h-full">
        <div>
          <div className="px-8 pt-6">
            <span className="font-bold text-[#db4444] flex " dir="rtl">
              <div className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
              <span className="">محصولات مشابه</span>
            </span>
            <span
              className="text-2xl text-black font-extrabold py-[10px] flex gap-10 px-4"
              dir="rtl"
            >
              <span className="ml-20">آنچه دیگران انتخاب کرده اند</span>
            </span>
          </div>
          <DiscountCarousel />
        </div>
        <div className="relative mx-auto w-full">
          <RatingFlowBite />
        </div>
        <div className="w-full mx-auto">
          <CommentSlider />
        </div>
      </div>
    </>
  );
};

export default page;
