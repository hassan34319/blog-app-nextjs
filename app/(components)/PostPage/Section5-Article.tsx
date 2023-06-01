import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Editor, EditorContent } from "@tiptap/react";
import React from "react";
import AiGenerator from "./AiGenerator";
import { EditorMenuBar } from "./EditorMenu";

type Props = {
  editor: Editor | null;
  isEditable: boolean;
  contentError: string;
  setContent : (Content: string) => void;
  title : string
};

function Article({ isEditable, editor, contentError, setContent,title }: Props) {
  return (
    <article className="text-wh-500 leading-8">
      {/* `AI CONTENT GENERATOE` */}
      <AiGenerator isEditable={isEditable} editor={editor} setContent={setContent} title={title} />
      {/* This div has all the content of the post. Prose is used to edit the content fetched from the database that has stylings  e.g <h1> withing it. */}
      <div
        className={
          isEditable
            ? "border-2 rounded-md w-full max-w-full bg-bl-100 p-3 prose prose-invert"
            : "w-full max-w-full prose prose-invert text-wh-50"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5 bg-bl-10" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
}

export default Article;
