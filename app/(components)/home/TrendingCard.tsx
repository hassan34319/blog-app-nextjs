import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";
import Image from "next/image";
type Props = {
  className?: string;
  post: Post;
};

function TrendingCard({ className, post }: Props) {
  return (
    // The link below represents the image. It is relative so that all its content fit the box.
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      {/* This div below is the div fo image. It has z-0 as its the bottom layer */}
      <div className="z-0 relative h-full w-full"></div>
      {/* This div below is the layer for gradient that makes image look darker from the bottom side. top-0 and left-0 mean that this layer starts at top left */}
      <div className='absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"'>
        {/* - Next JS Images : Smaller images automatically on smaller screens for faster loading and less memory and processing.
- First way to set dimensions of image is height and fidth.
- The other way is to set fill wnere then image goes relatie to container. SO  make sure container has relative property and is responsive. (w-full and h-full)
- Then sou can set style and choose the appropriate objectFit. We choose cover because we do not care if the image gets cut. */}
        <Image
          fill
          alt="tech"
          src={post?.image}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* This div below is the text layer. absolute refers to it being positioned relatively t its nearest ancestor. */}
      <div className=" absolute z-2 bottom-0 left-0 p-3">
        {/* This h4 below is the yellow box*/}
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange  text-bl-100">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
}

export default TrendingCard;
