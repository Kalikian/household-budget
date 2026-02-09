import React, { useState } from "react";

export default function Note() {
  const [text, setText] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      <label>Note:</label>
      <textarea
        className="flex items-center justify-between  "
        placeholder="Write your note ..."
        name="noteArea"
        onChange={handleOnChange}
        value={text}
      ></textarea>
    </div>
  );
}
