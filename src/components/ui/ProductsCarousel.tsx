"use client";
import { discountData, productData } from "@/mockdata/data";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardComp } from "./CardComp";
const ProductsCarousel = () => {
  const data = productData;
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-[90%] mx-auto cursor-pointer"
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="px-4">
              <CardComp data={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#ed4444] opacity-[100%]" />
      <CarouselNext className="bg-[#ed4444]" />
    </Carousel>
  );
};

export default ProductsCarousel;
