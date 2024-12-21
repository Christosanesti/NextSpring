import { carouselData } from "@/mockdata/data";
import { Carousel } from "flowbite-react";

export function HeroCarousel() {
  const data = carouselData;
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        {data.map((item) => (
          <img
            src={item.imageSrc}
            key={item.id}
            className="object-cover w-full h-full"
          />
        ))}
      </Carousel>
    </div>
  );
}
