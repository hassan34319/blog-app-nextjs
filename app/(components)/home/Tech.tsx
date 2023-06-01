import React from "react";
import Card from "../ui/Card";
import { Post } from "@prisma/client";

type Props = {
  post : Post[]
}

function Tech({post}: Props) {
  return (
    <section id="tech" className="pb-10">
      <hr className="border-1 border-bl-10 w-full" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-hot-red py-2 px-5 text-wh-10 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>
      {/* Grids for the tech section.Large card for the large tech news and 3 small cards for smaller news */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        {/* LARGE CARD */}
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={post[0]}
          isLongForm
        />
        {/* SMALL CARDS */}
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={post[1]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={post[2]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={post[3]}
          isSmallCard
        />
      </div>
    </section>
  );
}

export default Tech;
