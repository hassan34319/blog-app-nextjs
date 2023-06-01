import ListItem from "@tiptap/extension-list-item";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

type Props = {
  editor: Editor | null;
};

export const EditorMenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">1</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-bl-10  text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">2</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          H<span className="text-xs">3</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          paragraph
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <b>B</b>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          <i>I</i>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive("code")
              ? "bg-bl-10 text-wh-50 p-1 rounded-md"
              : "p-1"
          }
        >
          code
        </button>
        
      </div>
    </div>
  );
};
