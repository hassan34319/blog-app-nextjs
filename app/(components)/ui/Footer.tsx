import Link from "next/link";
import React, { Fragment } from "react";

function Footer() {
  return (
    <footer className="flex items-center justify-between w-full bg-bl-100 text-wh-50 px-5 py-10">
      <div className="justify-between mx-auto gap-20 sm:flex">
        {/* First section for description*/}
        <div className="basis-1/2 mt-16 sm:mt-0">
          <h4 className="font-bold">THE FIRST AI-POWERED BLOG</h4>
          <p className="my-5">
            🚀 Get ready to embark on a groundbreaking adventure as we explore
            emerging trends, cutting-edge technologies, and forward-thinking
            ideas right here on "Blog from the Future." Together, we'll shape
            the narrative of tomorrow's world.
          </p>
          <p className="hidden sm:block">
            © Blog of the Future All Rights Reserved.
          </p>
        </div>
        {/* Second section for links */}
        <div className="basis-1/4 mt-16 sm:mt-0 flex flex-col">
          <h4 className="font-bold">Links</h4>
          <Link
            className="cursor-pointer opacity-75 transition hover:opacity-100 mt-3"
            href={`${process.env.NEXT_PUBLIC_URL}`}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer opacity-75 transition hover:opacity-100 mt-3"
            href={`${process.env.NEXT_PUBLIC_URL}`}
          >
            Trending
          </Link>
          <Link
            className="cursor-pointer opacity-75 transition hover:opacity-100 mt-3"
            href={`${process.env.NEXT_PUBLIC_URL}`}
          >
            Technology
          </Link>
          <Link
            className="cursor-pointer opacity-75 transition hover:opacity-100 mt-3"
            href={`${process.env.NEXT_PUBLIC_URL}`}
          >
            Travel
          </Link>
        </div>
        {/* Third Section for contact */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
