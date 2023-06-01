import { BoltIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import React, { useState } from "react";

type Props = {
  editor: Editor | null;
  isEditable: boolean;
  setContent: (Content: string) => void;
  title: string;
};

function AiGenerator({ isEditable, editor, setContent, title }: Props) {
  // STATE TO SET WHAT ROLE DOES CGP CHATBOT PLAY
  const [role, setRole] = useState<string>("I am a helpful assistant.");

  // IF EDITOR DOES NOT EXIST RETURN NONE
  if (!editor) {
    return null;
  }

  // FUNCTION TO SEND BACKEND REUEST TO GENERATE AI CONTENT
  const postAiContent = async () => {
    // LOADING STATE.
    editor
      .chain()
      .focus()
      .setContent("Generating Ai Content. Please Wait...")
      .run();

    // REQUEST
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        role: role,
      }),
    });
    
    console.log(response)
    const data = await response.json();

    // SET BOTH EDITOR'S AND APP'S CONTENT STATE TO RECIEVED CONTENT FROM AI
    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <>
      {isEditable && (
        <div className="border-2 rounded-md bg-bl-100 p-3 mb-3">
          <h4 className="m-0 p-0 font-bold text-lg flex ">
            <BoltIcon className="h-8 w-8" />
            Generate AI Content
            <BoltIcon className="h-8 w-8" />
          </h4>
          <p className="my-1 p-0 text-xs mb-2 md:text-sm">
            What type of writer do you want?
          </p>

          <div className="flex gap-5 justify-between">
            <input
              className="border-2 rounded-md bg-bl-100 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-8 w-8 text-hot-red hover:text-wh-10" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AiGenerator;
