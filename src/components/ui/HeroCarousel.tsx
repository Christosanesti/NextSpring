import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/mockdata/data";

export function HeroCarouesel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const data = carouselData;
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-[80%] mx-auto mx-h-10 cursor-handler"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <img
              src={item.imageSrc}
              alt={`Carousel item ${item.id}`}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
