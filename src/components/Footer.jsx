import { Footer } from "flowbite-react";
import { BsLinkedin , BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export function FooterComponent() {
  return (
    <Footer container className="text-colorText">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://google.com"
              src="/vite.svg"
              alt="Logo"
              name="Prime Services"
              className="text-colorText"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-colorText" />
              <Footer.LinkGroup col className="text-colorText">
                <Footer.Link href="/" className="text-colorText">Home</Footer.Link>
                <Footer.Link href="/about-us" className="text-colorText">Our Culture</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Explore" className="text-colorText" />
              <Footer.LinkGroup col className="text-colorText">
                <Footer.Link href="/services" className="text-colorText">Services</Footer.Link>
                <Footer.Link href="/careers" className="text-colorText">Careers</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-colorText"/>
              <Footer.LinkGroup col className="text-colorText">
                <Footer.Link href="/privacy-policy" className="text-colorText">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-colorText">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Prime Services™" year={2024} className="text-colorText" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="text-colorText hover:text-primary" icon={BsFacebook} />
            <Footer.Icon href="#" className="text-colorText hover:text-primary" icon={RiInstagramFill} />
            <Footer.Icon href="#" className="text-colorText hover:text-primary" icon={BsTwitter} />
            <Footer.Icon href="#" className="text-colorText hover:text-primary" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
