"use client";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// This would typically come from a database or API
const wishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Feature-packed smartwatch with health tracking capabilities.",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Comfortable and durable running shoes for all terrains.",
  },
];

export default function Wishlist() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#ed4444]">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-[#ed4444] font-bold text-lg">
                ${item.price.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="flex items-center text-[#ed4444] border-[#ed4444] hover:bg-[#ed4444] hover:text-white"
                onClick={() => console.log(`Add item ${item.id} to cart`)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-[#ed4444] transition-colors duration-200"
                onClick={() => console.log(`Remove item ${item.id}`)}
              >
                <Trash2 className="h-5 w-5" />
                <span className="sr-only">Remove item</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {wishlistItems.length === 0 && (
        <Card className="mt-6">
          <CardContent>
            <p className="text-center text-gray-500 py-8">
              Your wishlist is empty.
            </p>
          </CardContent>
        </Card>
      )}
      <div className="mt-8 text-center">
        <Button className="bg-[#ed4444] hover:bg-[#d63a3a] text-white font-bold py-2 px-4 rounded">
          Add all to cart
        </Button>
      </div>
    </div>
  );
}
