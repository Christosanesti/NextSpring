"use client";
import Link from "next/link";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
const Hero = () => {
  return (
    <section className="justify-between flex ">
      <div className="w-[80%] mx-auto py-2">
        <HeroCarousel />
      </div>
      <div className=" gap-6 pt-2 border-l-2 border-gray-200 flex-4 px-9 ml-10 text-right">
        <ul className="py-4 gap-5 flex flex-col text-md font">
          <Link href={"/men"}>فشن مردانه</Link>
          <Link href={"/women"}>فشن زنانه</Link>
          <Link href={"/kids"}>فشن کودکان</Link>
          <Link href={"/electronics"}>لوازم الکترونیک</Link>
          <Link href={"/sports"}>ورزشی</Link>
          <Link href={"/home"}>لوازم منزل</Link>
          <Link href={"/cosmetics"}>بهداشتی و آرایشی</Link>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
