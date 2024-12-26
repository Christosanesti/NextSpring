/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lUH1icWWsYY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import BreadCrumbCheckOut from "@/components/ui/BreadCrumbCheckOut";
import React from "react";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FormControl, FormLabel } from "@mui/material";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "نام میباست حداقل ۲ حرف باشد!" })
    .max(50, { message: "نام میباست حداکثر ۵۰ حرف باشد!" }),
  lastName: z
    .string()
    .min(2, { message: "نام خانوادگی میبایست حداقل ۲ حرف باشد!" })
    .max(50, { message: "نام خانوادگی میبایست حداکثر ۵۰ حرف باشد!" }),
  email: z.string().email({ message: "ایمیل معتبر نمی باشد!" }),
  phone: z.string(),
  address: z
    .string()
    .min(10, { message: "آدرس میبایست حداقل ۱۰ حرف باشد!" })
    .max(250, { message: "آدرس میبایست حد اکثر ۲۵۰ حرف باشد!" }),
});

export default function Component() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <React.Fragment>
      <BreadCrumbCheckOut />
      <main
        className="container mx-auto my-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]"
        dir="rtl"
      >
        <div>
          <span className="font-bold text-[#db4444] flex " dir="rtl">
            <div className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></div>
            <span className="">لبست کالا</span>
          </span>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
              <img
                src="/fash1.jpg"
                width={80}
                height={80}
                alt="Product Image"
                className="rounded-md"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">نام محصول</h3>
                <p className="text-gray-500 dark:text-gray-400">رنگ - سایز</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <span>1</span>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-right font-medium">100 تومن</div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950">
              <img
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="Product Image"
                className="rounded-md"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">Acme T-Shirt</h3>
                <p className="text-gray-500 dark:text-gray-400">Blue, Medium</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <span>2</span>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-right font-medium">$39.99</div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="font-bold text-[#db4444] flex " dir="rtl">
                  <span className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></span>
                  <span className="py-1">پیش فاکتور</span>
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>جمع اقلام</span>
                <span>$139.98</span>
              </div>
              <div className="flex items-center justify-between">
                <span>هزینه پستی</span>
                <span>$139.98</span>
              </div>
              <div className="flex items-center justify-between">
                <span>مالیات</span>
                <span>$11.20</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>جمع کل</span>
                <span>$151.18</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>
                    <span className="font-bold text-[#db4444] flex " dir="rtl">
                      <span className="border-[8px] gap-10 border-[#db4444] rounded-sm mx-2 h-7"></span>
                      <span className="py-2">ارسال و پرداخت</span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>نام</FormLabel>
                            <FormControl>
                              <Input placeholder="ننه" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>نام خانوادگی</FormLabel>
                            <FormControl>
                              <Input placeholder="مریم" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ایمیل</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="nane@maryam.com"
                                {...field}
                                dir="ltr"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>تلفن</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="09121234567"
                                {...field}
                                dir="ltr"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>نشانی</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="نشانی کامل منزل"
                              className="resize-none w-full flex"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment">Payment Method</Label>
                    <Select id="payment" dir="rtl">
                      <SelectTrigger>
                        <SelectValue placeholder="روش پرداخت" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        <SelectItem value="credit-card text-right">
                          ملی کارت
                        </SelectItem>
                        <SelectItem value="paypal">زرین پال</SelectItem>
                        <SelectItem value="apple-pay">ملت کارت</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-[#ed4444] hover:bg-[#de4444]"
                  >
                    تایید سفارش
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </main>
    </React.Fragment>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
