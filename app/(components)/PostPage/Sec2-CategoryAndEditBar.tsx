import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import React from "react";

type Props = {
  isEditable: boolean;
  handleOpenEditor: (isEditable: boolean) => void;
  handleEnableEdit : ()=> void,
  handleCancelEdit : ()=>void,
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

function CategoryAndEditBar({
  handleOpenEditor,
  handleCancelEdit,
  handleEnableEdit,
  setTempTitle,
  setTempContent,
  setTitle,
  title,
  tempTitle,
  tempContent,
  editor,
  post,
  isEditable,
}: Props) {
  //1- Store the current title in a temp variarable when we open edtor
  return (
    <div className="flex justify-between items-center">
      {/* Category Title */}
      <div className="bg-accent-gold w-max py-2 px-8 text-bl-100 text-sm font-bold drop-shadow-lg mt-10">
        {post?.category}
      </div>

      {/* /////// */}

      {/* Edit Icon or if on editing mode close(x) icon. */}
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-wh-100" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-wh-100" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CategoryAndEditBar;
