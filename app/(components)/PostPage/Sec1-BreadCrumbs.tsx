import { FormattedPost } from "@/app/types";
import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
    post : FormattedPost
    title : string
};

function BreadCrumbs({post,title}: Props) {
  return (
    <h3 className="cursor-pointer flex justify-start space-x-3">
      <Link
        href={"/"}
        className="text-sm opacity-60 transition hover:opacity-100 hover:underline text-wh-10"
      >
        Home
      </Link>
      <p className="text-sm opacity-60"> {">"}</p>
      <Link
        href={"/"}
        className="text-sm opacity-60 transition hover:opacity-100 text-wh-10 hover:underline"
      >
        {post?.category}
      </Link>
      <p className="text-sm opacity-60"> {">"}</p>
      <Link
        href={`/post/${post?.id}`}
        className="text-sm opacity-60 transition hover:opacity-100 text-wh-10 hover:underline"
      >
        {title}
      </Link>
    </h3>
  );
}

export default BreadCrumbs;
