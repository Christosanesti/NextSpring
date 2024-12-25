import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumbCheckOut = () => {
  return (
    <Breadcrumb className="my-4 w-[90%]" dir="rtl">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator dir="rtl" className="scale-x-[-1]" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">سبد خرید</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator dir="rtl" className="scale-x-[-1]" />
        <BreadcrumbItem>
          <BreadcrumbPage>پرداخت نهایی</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbCheckOut;
