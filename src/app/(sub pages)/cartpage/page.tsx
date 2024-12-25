import BreadCrumbComp from "@/components/ui/BreadCrumbComp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Menu from "@/components/ui/Menu";
const CartPage = () => {
  return (
    <div className="w-[90%] my-10 mx-auto">
      <BreadCrumbComp />
      <Menu />
      <div className="flex justify-between  w-[80%] mx-auto">
        <Button className="bg-[#ed3333] hover:bg-[#de4444]">
          بازگشت به فروشگاه
        </Button>
        <Card className="w-[350px]">
          <h2 className="text-center text-2xl font-bold py-4">سبد خرید شما</h2>

          <p className="text-lg justify-between flex px-2 p-3">
            <span>$1500</span>
            <span>جمع اقلام</span>
          </p>
          <hr />
          <p className="text-lg justify-between flex px-2 p-3">
            <span>$1500</span>
            <span>هزینه پست</span>
          </p>
          <hr />
          <p className="text-lg justify-between flex px-2 p-3">
            <span>$1500</span>
            <span>مبلغ کل:</span>
          </p>
          <hr />
          <div className="flex flex-wrap gap-4"></div>
          <div className="flex justify-between items-center py-5">
            <Button className="bg-[#ed3333] mx-auto hover:bg-[#de4444]">
              پرداخت
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
