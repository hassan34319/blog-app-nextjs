"use client";
import Link from "next/link";
import React from "react";
type Props = {};

function NavLinks({}: Props) {
  return (
    <>
      <Link
        className="cursor-pointer opacity-75 transition hover:opacity-100"
        href={"/"}
      >
        Home
      </Link>
      <Link
        href={"/#trending"}
        className="cursor-pointer opacity-75 transition hover:opacity-100"
      >
        Trending
      </Link>
      <Link
        href={"/#tech"}
        className="cursor-pointer opacity-75 transition hover:opacity-100"
      >
        Technology
      </Link>
      <Link
        href={"/#travel"}
        className="cursor-pointer opacity-75 transition hover:opacity-100"
      >
        Travel
      </Link>
    </>
  );
}

export default NavLinks;
