import { FormattedPost } from "@/app/types";
import Image from "next/image";
import React from "react";

type Props = {
  post: FormattedPost;
  title: string;
};

function PostImage({ title, post }: Props) {
  return (
    //  {/* This div has the image. Height is 96 at smaller and medium screens and then increases to max of 60% of the page height after md screen */}
    <div className="relative w-auto mt-2 mb-16 h-96 md:h-[36rem]">
      <Image
        fill
        alt={title}
        src={post.image}
        sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 85vw,
            (max-width: 1060px) 75vw,
            60vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default PostImage;
