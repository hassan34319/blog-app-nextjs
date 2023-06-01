import React from "react";
import Card from "../ui/Card";
import { Post } from "@prisma/client";

type Props = {
  post : Post[]
} 
function Travel({post}: Props) {
  return (
    <section id="travel" className="pb-10 sm:gap-0">
      <hr className="border-1 border-bl-10 " />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-bl-100 text-sm font-bold">
          NEWS
        </h4>
        <p className="font-bold text-2xl">New Travel Experiences</p>
      </div>
      {/* Grids for the tech section.Large card for the large tech news and 3 small cards for smaller news */}
      <div className="sm:grid grid-cols-3 grid-rows-1 gap-x-8 gap-y-8">
        {/* 3 CARDS in one line horizontally on dekstop. text below image */}
        <Card
          className="col-span-1 row-span-1 gap-3 sm:gao-0 mt-10 sm:mt-0"
          imageHeight="h-80"
          post={post[1]}
          isLongForm
        />
        <Card
          className="col-span-1 row-span-1 gap-3 sm:gap-0 mt-10 sm:mt-0"
          imageHeight="h-80"
          post={post[2]}
          isLongForm
        />
        <Card
          className="col-span-1 row-span-1 gap-3 sm:gap-0 mt-10 sm:mt-0"
          imageHeight="h-80"
          post={post[3]}
          isLongForm
        />
        {/* 1 big card in one line horizontally on dekstop. text inline with image. */}
        <Card
          className="col-span-3 mt-10 sm:mt-0 sm:flex justify-between gap-3 items-center"
          imageHeight="h-80"
          post={post[4]}
          isLongForm
        />
      </div>
    </section>
  );
}

export default Travel;
