import { FormattedPost } from "@/app/types";
import React from "react";

type Props = {
  isEditable: boolean;
  title: string;
  titleError: String;
  post: FormattedPost;
  handleOnChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function TitleAndDetails({
  isEditable,
  title,
  handleOnChangeTitle,
  titleError,
  post,
}: Props) {
  // DATE MODIFICATIONS
  const date = new Date(post.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);
  //  //  //

  return (
    <>
      {isEditable ? (
        <div>
          {/* Text area for changing title */}
          <textarea
            id="title"
            className="border-2 rounded-md bg-bl-100 p-3 w-full mt-3"
            placeholder="Title"
            onChange={handleOnChangeTitle}
            value={title}
          />

          {/* Displays the error user has made in the title */}
          {titleError && <p className="mt-1 text-hot-red">{titleError}</p>}
        </div>
      ) : (
        // {/*  Main title */}
        <h1 className="font-bold mt-5 text-xl md:text-3xl">{title}</h1>
      )}

      {/* Author and Date */}

      <div className="flex gap-3 mt-5">
        <h5 className="text-sm">By {post.author}</h5>
        <h6 className="text-sm opacity-50">{formattedDate}</h6>
      </div>
    </>
  );
}

export default TitleAndDetails;
