"use client";
import Link from "next/link";
import { HeroCarouesel } from "@/components/ui/HeroCarousel";
const Hero = () => {
  return (
    <section className="justify-between flex  gap-4 w-[90%]" dir="rtl">
      <div className="flex-6 flex flex-col gap-6 pt-2 border-l-2 border-gray-200 pl-9">
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
      <div className="flex flex-1">
        <HeroCarouesel />
      </div>
    </section>
  );
};

export default Hero;
