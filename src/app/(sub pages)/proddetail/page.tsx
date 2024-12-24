import ProductDetails from "@/components/ui/ProductDetails";
import React from "react";
import ProductReview from "@/components/ui/ProductReview";
import RatingFlowBite from "@/components/ui/RatingFlowBite";
import CommentSlider from "@/components/ui/CommentSlider";
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
      <div className="w-[80%] mx-auto flex flex-col h-full">
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
