import React, { useState } from "react";
import { ENTRY_CATEGORIES, type EntryCategoryType } from "../types/budget";

export default function EntryCategory() {
  const [selcetAction, setSelectAction] =
    useState<EntryCategoryType>("Housing");

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectAction(e.target.value as EntryCategoryType);
  }

  return (
    <div className="flex items-center justify-between w-full">
      <label htmlFor="category">Entry Category:</label>
      <select
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
