import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="flex flex-row justify-between shadow-md py-4 px-6 sticky"
      dir="rtl"
    >
      <Link href={"/"} className="font-bold text-lg gap-2 flex justify-between">
        <Image
          src={"/logo.avif"}
          alt="logo"
          width={40}
          height={40}
          className="scale-x-[-1] "
        />
        <span className="p-2">ننه مریم</span>{" "}
      </Link>
      <div className="flex gap-7 text-black p-2">
        <Link href={"/about"}>درباره من</Link>
        <Link href={"/Home"}> صفحه اصلی</Link>
        <Link href={"/register"}>ثبت نام</Link>
        <Link href={"/collection"}>محصولات</Link>
      </div>

      <div className="flex p-2 gap-4">
        <Input type="search" placeholder={`جستجو...`} />
        <Heart size={30} />
        <ShoppingBag size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
