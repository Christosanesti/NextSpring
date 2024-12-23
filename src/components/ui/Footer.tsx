import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer bgDark className="py-5 mt-5 rounded-b-none bg-black" dir="rtl">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div dir="rtl">
            <FooterTitle title="فروشگاه" />
            <FooterTitle title="" />
            <FooterLinkGroup col>
              <FooterLink href="#">درباره</FooterLink>
              <FooterLink href="#">مشاغل</FooterLink>
              <FooterLink href="#">برند</FooterLink>
              <FooterLink href="#">بلاگ</FooterLink>
              <FooterLink href="#"></FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="help center" />
            <FooterLinkGroup col>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#"></FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="قوانین" />
            <FooterLinkGroup col>
              <FooterLink href="#">منشور حقوق کاربر</FooterLink>
              <FooterLink href="#">حقوق سایت</FooterLink>
              <FooterLink href="#">ضوابط و مقررات</FooterLink>
              <FooterLink href="#"></FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="download" />
            <FooterLinkGroup col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
              <FooterLink href="#"></FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
            <FooterLink href="#"></FooterLink>
          </div>
        </div>
      </div>
    </Footer>
  );
}
