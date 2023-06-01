import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "../../../public/assets/adz-2.jpg";
import AboutProfile from "../../../public/assets/about2-profile.jpg";

type Props = {};

function Sidebar({}: Props) {
  return (
    <section id="subscribe" className="bg-bl-10">
      <h4 className="bg-bl-100 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark={false} />
      </div>
      <hr className="border-2  border-bl-100"></hr>
      <Subscribe />
      <Image
        className="hidden md:block my-3 w-full"
        alt="advert-2"
        placeholder="blur"
        src={Ad2}
        width={500}
        height={1000}
      />
      <h4 className="bg-bl-100 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        {" "}
        <Image
          alt="about-profile"
          placeholder="blur"
          src={AboutProfile}
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Mark Dawins
      </h4>
      <p className="text- text-center text-sm px-4 py-3">
        ✨ Join me as we dive into a world where imagination meets innovation,
        where AI-driven insights guide our discussions, and where we envision
        the possibilities of the future. Welcome to "Blog from the Future" –
        let's create tomorrow, today!
      </p>
    </section>
  );
}

export default Sidebar;
