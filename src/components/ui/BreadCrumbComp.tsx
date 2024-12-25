import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, HomeIcon, Slash } from "lucide-react";

const BreadCrumbComp = () => {
  return (
    <Breadcrumb dir="rtl">
      <BreadcrumbList>
        <HomeIcon size={15} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        {`>`}
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">سبد خرید</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
