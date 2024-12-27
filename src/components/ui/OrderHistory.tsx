import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Badge } from "./badge";
import { Button } from "./button";
import clsx from "clsx";
// ... other imports

// Mock data for demonstration
const orders = [
  {
    id: "1",
    date: "2023-06-01",
    total: 125.99,
    status: "Delivered",
    photo: "/fash1.jpg",
    details: "Smartphone X1",
    expectedDelivery: "2023-06-05",
  },
  {
    id: "2",
    date: "2023-05-28",
    total: 79.99,
    status: "Processing",
    photo: "/fash2.jpg",
    details: "Wireless Earbuds",
    expectedDelivery: "2023-06-02",
  },
  {
    id: "3",
    date: "2023-05-15",
    total: 249.99,
    status: "Shipped",
    photo: "/fash3.jpg",
    details: "Laptop Pro",
    expectedDelivery: "2023-05-20",
  },
  {
    id: "4",
    date: "2023-05-25",
    total: 24,
    status: "Cancelled",
    photo: "/fash4.jpg",
    details: "Phone Case",
    expectedDelivery: "N/A",
  },
];
export default function OrderHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">تصویر</TableHead>
          <TableHead className="text-right">شماره سفارش</TableHead>
          <TableHead className="text-right">تاریخ</TableHead>
          <TableHead className="text-right">جزئیات</TableHead>
          <TableHead className="text-right">مجموع</TableHead>
          <TableHead className="text-right">وضعیت</TableHead>
          <TableHead className="text-right">تاریخ تحویل</TableHead>
          <TableHead className="text-right">اعمال تغییرات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <Image
                src={order.photo}
                alt={order.details}
                width={50}
                height={50}
                className="rounded-md"
              />
            </TableCell>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.details}</TableCell>
            <TableCell>${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={order.status === "Delivered" ? "default" : "secondary"}
                className={clsx(
                  order.status === "Delivered" &&
                    "bg-green-500 hover:bg-green-600",
                  order.status === "Processing" &&
                    "bg-yellow-500 hover:bg-yellow-600",
                  order.status === "Shipped" && "bg-blue-500 hover:bg-blue-600",
                  order.status === "Cancelled" && "bg-red-500 hover:bg-red-600"
                )}
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.expectedDelivery}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                مشاهده جزییات
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
