import React, { useState } from "react";

export default function Note() {
  const [text, setText] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center">
      <label>Note:</label>
      <textarea
        className="border border-solid rounded-md border-gray-400 p-2"
        placeholder="Write your note ..."
        name="noteArea"
        onChange={handleOnChange}
        value={text}
      ></textarea>
    </div>
  );
}
