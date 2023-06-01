import React from "react";
import { Post as PostType } from "@prisma/client";
import { prisma } from "@/app/api/client";
import { FormattedPost } from "@/app/types";
import Sidebar from "@/app/(components)/ui/Sidebar";
import Content from "@/app/(components)/PostPage/Content";


type Props = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};
async function postPage({ params }: Props) {
  const post: FormattedPost | null = await getPost(params.id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7 bg-bl-primary">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {/* Content takes 3/4 of the space */}
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default postPage;
