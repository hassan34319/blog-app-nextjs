import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post;
};
//Reusable Card component
function Card({
  className,
  imageHeight,
  isSmallCard,
  isLongForm,
  post,
}: Props) {
  const date = new Date(post.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className={className}>
      {/* Complete clickable card below */}
      <Link className="basis-full hover:opacity-70" href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
        {/* Image div below */}
        <div className={`relative w-auto mb-3 bg-bl-30 ${imageHeight}`}>
          {" "}
          <Image
            fill
            alt={post?.category}
            src={post?.image}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      {/* The title and text div below */}
      <div className="basis-full">
        {/* Clickable Title below */}
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          {/* For smaller cards we clamp the lines to be 2 lines max */}
          <h4
            className={`font-bold hover:opacity-50
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {post.title}
          </h4>
        </Link>
        {/* Div below are author and date details for the blog */}
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{post.author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        {/* Div below is a little text from the blog. It is clamped to 5 lines for long form and to 3 for smaller forms */}
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {post.snippet}
        </p>
      </div>
    </div>
  );
}

export default Card;
