"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FormattedPost } from "@/app/types";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import SocialLinks from "@/app/(components)/ui/SocialLinks";
import { EditorMenuBar } from "./EditorMenu";
import BreadCrumbs from "./Sec1-BreadCrumbs";
import CategoryAndEditBar from "./Sec2-CategoryAndEditBar";
import TitleAndDetails from "./Sec3-TitleAndDetails";
import PostImage from "./Sec4-PostImage";
import Article from "./Section5-Article";

type Props = {
  post: FormattedPost;
};
function Content({ post }: Props) {
  // State Management
  const [isEditable, setIsEditable] = useState<boolean>(false);

  //This is the permenant title and content. This is updated only when submit button is clicked.
  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState<string>(post.content);

  //This is the temperory title and content. This is updates as soon as we make a change in the title in the editor. It is converted to permenant title if submit button is clicked else it goes back to it's previous old state.
  const [tempTitle, setTempTitle] = useState<string>(post.title);
  const [tempContent, setTempContent] = useState<string>(post.content);

  //These are the error states for errors in titles and content
  const [titleError, setTitleError] = useState<string>("");
  const [contentError, setContentError] = useState<string>("");
  // // //

  // State Change Functions
  // 1-Changes the Is Editable state.
  const handleOpenEditor = (bool: boolean) => {
    // Change our custom state IsEditable
    setIsEditable(bool);
    // Change tiptap's editor state
    editor?.setEditable(bool);
  };
  //
  //2- Content change
  const handleContentChange = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };
  //
  //3- Title Change
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };
  //4- Store the current title in a temp variarable when we open edtor
  const handleEnableEdit = () => {
    handleOpenEditor(true);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  };

  //5- If editing is cancelled put the old title stored in the temp variable as current title.
  const handleCancelEdit = () => {
    handleOpenEditor(false);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };

  //6- Form submission after changing text and clicking submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") {
      setTitleError("This field is required.");
      const element = document.getElementById("title");
      if (element) {
        // 👇 Will scroll smoothly to the tech section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (editor?.isEmpty) setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data = await response.json();

    handleOpenEditor(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };
  //
  // // //

  //TIPTAP EDITIOR
  //Alliging our internal state changes and tiptap editor changes
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert text-wh-50 xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    onUpdate: handleContentChange,
    editable: isEditable,
  });

  //   //  //

  return (
    <section className="pt-3 pb-10 w-full mb-10 ">
      {/* This h3 has the breadcrubs (the top links that show path from where post is reached) */}

      {/* BREADCRUMBS SECTION */}
      <BreadCrumbs post={post} title={title} />

      {/* // /// ///  ///  */}

      {/* CATEGORY NAME AND EDIT ICON*/}
      <CategoryAndEditBar
        isEditable={isEditable}
        handleOpenEditor={handleOpenEditor}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
        handleCancelEdit={handleCancelEdit}
        handleEnableEdit={handleEnableEdit}
      />
      {/* //////// */}

      {/* Editor Form */}
      <form className="w-full max-w-full h-full " onSubmit={handleSubmit}>
        {/* POST TITLE AND AUTHOUR AND DATE */}
        <TitleAndDetails
          handleOnChangeTitle={handleOnChangeTitle}
          title={title}
          isEditable={isEditable}
          titleError={titleError}
          post={post}
        />

        {/* /// */}

        {/* IMAGE */}
        <PostImage title={title} post={post} />
        {/* //// */}

        {/* CONTENT ARTICLE */}
        <Article
          isEditable={isEditable}
          editor={editor}
          contentError={contentError}
          setContent = {setContent}
          title = {title}
        />
        {/* //////// */}

        {/* SUBMIT */}
        {/* This is the submit button that submits the form and sends a post request to the backend to store the new updated post. */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-gold hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* //////// */}

      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3 bg-bl-100 px-5 py-5">
        <SocialLinks />
      </div>
    </section>

    // // //
  );
}

export default Content;
