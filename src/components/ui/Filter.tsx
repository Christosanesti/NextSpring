"use client";

import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PlusCircle, ShoppingCart } from "lucide-react";
import { products } from "@/mockdata/data";
// Import MUI Button
import { Button as MuiButton } from "@mui/material";
interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  // Change the type to string
}

export default function Filter(props: ProductProps) {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [0, 200],
    rating: 0,
  });
  const [sortBy, setSortBy] = useState("price");
  // New state for controlling the number of displayed products
  const [displayCount, setDisplayCount] = useState(15);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (
          selectedFilters.category.length > 0 &&
          !selectedFilters.category.includes(product.category as never)
        ) {
          return false;
        }
        if (
          product.price < selectedFilters.priceRange[0] ||
          product.price > selectedFilters.priceRange[1]
        ) {
          return false;
        }
        if (product.rating < selectedFilters.rating) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price") {
          return a.price - b.price;
        } else {
          return b.rating - a.rating;
        }
      });
  }, [selectedFilters, sortBy]);

  const handleFilterChange = (type: string, value: unknown) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 15);
  };
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-4 md:p-8">
      <div>
        <div className="flex items-center justify-between mb-4" dir="rtl">
          <div className="px-8 pt-6">
            <span className="font-bold text-[#db4444] flex " dir="rtl">
              <div className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
              <span className="">دسته بندی ها</span>
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                مرتب سازی: {sortBy === "price" ? "قیمت" : "امتیاز"}
                <ListOrderedIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={sortBy}
                dir="rtl"
                onValueChange={handleSortChange}
              >
                <DropdownMenuRadioItem value="price">
                  قیمت
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="rating">
                  امتیاز
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, displayCount).map((product) => (
            <div
              dir="rtl"
              key={product.id}
              className="bg-background rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-base font-semibold mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-base font-semibold mb-4 gap-3">
                  {product.price.toFixed(2)}
                  <span className="px-2">تومن</span>
                </div>
                <Button
                  className="mt-auto bg-[#ed4444] hover:bg-[#d63c3c] text-white"
                  onClick={() => {
                    // Add to cart logic here
                    console.log(`Added ${product.title} to cart`);
                  }}
                >
                  <PlusCircle />
                  افزودن
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length > displayCount && (
          <div className="mt-8 text-center">
            <MuiButton
              variant="contained"
              color="primary"
              onClick={handleShowMore}
            >
              نمایش بیشتر
            </MuiButton>
          </div>
        )}
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6" dir="rtl">
        <h2 className="text-lg font-semibold mb-4">فیلتر</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-base font-medium mb-2">دسته</h3>
            <div className="grid gap-2">
              {["لوازم برقی", "البسه", "لوازم خانگی"].map((category) => (
                <Label
                  key={category}
                  className="flex items-center gap-2 font-normal"
                >
                  <Checkbox
                    checked={selectedFilters.category.includes(
                      category as never
                    )}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleFilterChange("category", [
                          ...selectedFilters.category,
                          category,
                        ]);
                      } else {
                        handleFilterChange(
                          "category",
                          selectedFilters.category.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">بازه قیمت</h3>
            <Slider
              min={0}
              max={200}
              step={1}
              value={selectedFilters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>تومن{selectedFilters.priceRange[1]}</span>
              <span>تومن{selectedFilters.priceRange[0]}</span>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">امتیاز</h3>
            <div className="grid gap-2">
              {[2, 3, 4].map((rating) => (
                <Label
                  key={rating}
                  className="flex items-center gap-2 font-normal"
                >
                  <Checkbox
                    checked={selectedFilters.rating == rating}
                    onCheckedChange={(checked) => {
                      handleFilterChange("rating", checked ? rating : 0);
                    }}
                  />
                  {rating} ستاره و بیشتر
                </Label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListOrderedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
