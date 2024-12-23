import type { CustomFlowbiteTheme } from "flowbite-react";

import { Input, InputAdornment, OutlinedInput } from "@mui/material";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import SearchInput from "./SearchInput";

export function NavbarComp() {
  return (
    <Navbar fluid rounded dir="rtl" className="shadow-xl py-5">
      <NavbarBrand href="/">
        <img
          src="/logo.avif"
          className="mr-3 h-6 sm:h-9 scale-x-[-1]"
          alt="ننه مریم"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold px-5 dark:text-white">
          ننه مریم
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="/logo.avif" rounded />}
        >
          <DropdownHeader>
            <span className="block text-sm">نام</span>
            <span className="block truncate text-sm font-medium">
              name@nane.com
            </span>
          </DropdownHeader>
          <DropdownItem>صفحه اصلی</DropdownItem>
          <DropdownItem>تنظیمات</DropdownItem>
          <DropdownItem>فروش</DropdownItem>
          <DropdownDivider />
          <DropdownItem>خروج</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <div></div>
      <SearchInput />
      <NavbarCollapse>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#" active>
          صفحه اصلی
        </NavbarLink>
        <NavbarLink href="#">درباره من</NavbarLink>
        <NavbarLink href="#">خدمات</NavbarLink>
        <NavbarLink href="#">کالاها</NavbarLink>
        <NavbarLink href="#">ورود</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
