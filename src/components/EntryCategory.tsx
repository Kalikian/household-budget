import React, { useState } from "react";
import { ENTRY_CATEGORIES, type EntryCategoryType } from "../types/budget";

export default function EntryCategory() {
  const [selcetAction, setSelectAction] =
    useState<EntryCategoryType>("Housing");

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectAction(e.target.value as EntryCategoryType);
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      <label htmlFor="category">Entry Category:</label>
      <select
        className="border border-solid rounded-md border-gray-400 p-2 m-2"
        id="category"
        name="category"
        onChange={handleOnChange}
        value={selcetAction}
      >
        {ENTRY_CATEGORIES.map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
    </div>
  );
}
