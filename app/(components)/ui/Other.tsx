import React from "react";
import Card from "./Card";
import { Post } from "@prisma/client";

type Props = {
  post : Post[]
}

function Other({post}: Props) {
  return (
    <section className="pb-10">
      <hr className="border-1 border-bl-10 " />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <p className="font-bold text-2xl">Other Exciting Posts</p>
      </div>
      {/* Grids for the tech section.Large card for the large tech news and 3 small cards for smaller news */}
      <div className="sm:grid grid-cols-2 gap-16">
        {/* 4 CARDS, 2 in one line, text below image*/}
        <Card
          className="col-span-1 row-span-1 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={post[1]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={post[2]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={post[3]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={post[4]}
          isSmallCard
        />
      </div>
    </section>
  );
}

export default Other;
