import React, { useState } from "react";
import { ENTRY_CATEGORIES, type EntryCategoryType } from "../types/budget";

type EntryCategorySelectValue = EntryCategoryType | "";

export default function EntryCategory() {
  const [selcetAction, setSelectAction] =
    useState<EntryCategorySelectValue>("");

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectAction(e.target.value as EntryCategorySelectValue);
  }

  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="category">Entry Category:</label>
      <select
        className="border border-solid rounded-md border-gray-400 p-2"
        id="category"
        name="category"
        onChange={handleOnChange}
        value={selcetAction}
      >
        <option className="text-gray-400" value="" disabled>
          -- Enter Category --
        </option>
        {ENTRY_CATEGORIES.map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
    </div>
  );
}
