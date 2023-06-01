import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Ad1 from "../../../public/assets/ad-1.jpg";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <header className="mb-5 bg-gradient-black text-wh-50 ">
      <nav className="flex items-center justify-between w-full bg-bl-100 text-wh-50 px-10 py-4">
        {/* This div belowtakes care of all the Social Links */}
        <div className="hidden  sm:block ">
          <SocialLinks isDark={false} />
        </div>
        {/* This div below takes care of all the links in the navbar */}
        <div className="flex items-between justify-center gap-10 md:gap-20 ">
          <NavLinks />
        </div>
        <NavButton />
      </nav>
      {/* This div below is the secondary navbar */}
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">
            BLOGS FROM THE FUTURE
          </h1>
          <p className="text-sm mt-3">The First Ever AI Powered Blog.</p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
          Image Here
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Ad1}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="border-1  border-bl-10" />
    </header>
  );
}

export default Navbar;
