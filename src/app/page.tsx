import CategoryCarousel from "@/components/ui/CategoryCarousel";
import FeaturedBanner from "@/components/ui/FeaturedBanner";
import Hero from "@/components/ui/Hero";
import NewArrivals from "@/components/ui/NewArrivals";
import Products from "@/components/ui/Products";
import { SpecialCarousel } from "@/components/ui/SpecialCarousel";

export default function Home() {
  return (
    <>
      <Hero />

      <SpecialCarousel />
      <CategoryCarousel />
      <FeaturedBanner />
      <Products />
      <NewArrivals />
    </>
  );
}
