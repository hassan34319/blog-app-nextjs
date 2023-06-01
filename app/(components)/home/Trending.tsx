import React from "react";
import TrendingCard from "./TrendingCard";
import { Post } from "@prisma/client";

type Props = {
  post : Post[]
}
function Trending({post}:Props) {
  return (
    // Section refers to the whole trending section
    <section id="trending" className="pt-3 pb-10">
      {/* This div represents the top line with the title trending and the tagline */}
      <div className="flex items-center gap-3">
        <div className="bg-accent-gold py-2 px-8 text-bl-100 text-sm font-bold drop-shadow-lg rounded-md">
          TRENDING
        </div>
        <p className="text-sm">
          Uncover the Hottest Topics: Trending Insights for the Future.
        </p>
      </div>

      {/* flex option */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* Grid option */}
      {/* This below means that content-grid i.e available space is distirubuted into 4 cols and 2 rowns */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        {/* This below means that the div below takes up space of 2 rows and 2 cols */}
        <TrendingCard post={post[0]} className="col-span-2 row-span-2 bg-bl-30"></TrendingCard>
        {/* This div below means that the div takes up space of 2 cols and 1 row */}
        <TrendingCard post={post[1]} className="col-span-2 row-span-1 bg-bl-30"></TrendingCard>
        {/* This div below means that div takes space of 1 col and 1 row each */}
        <TrendingCard post={post[2]} className="col-span-1 row-span-1 bg-bl-30"></TrendingCard>
        <TrendingCard post={post[3]} className="col-span-1 row-span-1 bg-bl-30"></TrendingCard>
      </div>
      <p className="text-sm">
        Explore the forefront of progress and be part of the conversation as we
        delve into the trending narratives, providing you with thought-provoking
        insights and fresh perspectives on the ever-evolving landscape of
        AI-driven innovation.
      </p>
    </section>
  );
}

export default Trending;
