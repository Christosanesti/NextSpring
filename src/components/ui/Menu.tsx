import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "./button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Menu() {
  return (
    <Table className="w-[90%] mx-auto">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="justify-between">
          <TableHead className="text-center">مبلغ کل</TableHead>
          <TableHead className="text-center">قیمت</TableHead>
          <TableHead className="text-center">تعداد</TableHead>
          <TableHead className="text-center">محصول</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5].map((item) => (
          <TableRow key={item} className="my-4 justify-center">
            <TableCell className="text-center">300</TableCell>
            <TableCell className="text-center">300</TableCell>
            <TableCell className="text-center">300</TableCell>
            <TableCell className="flex flex-row justify-center gap-3">
              <p className="py-2">نام محصول</p>
              <Image
                src="/fash1.jpg"
                height={50}
                width={50}
                alt={"any"}
                className=""
              />
              <Button className="bg-[#ed4444] hover:bg-[#de4444] ">حذف </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-center text-[#ed4444] font-bold ">
            $2,500.00
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="text-center text-[#ed4444] font-bold">
            جمع کل
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
