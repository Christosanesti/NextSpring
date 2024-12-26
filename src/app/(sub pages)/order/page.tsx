import OrderHistory from "@/components/ui/OrderHistory";

export default function OrderHistoryPage() {
  return (
    <div className="container mx-auto py-10" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      <OrderHistory />
    </div>
  );
}
