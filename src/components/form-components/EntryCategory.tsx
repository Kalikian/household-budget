import React, { useState } from "react";
import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
  type EntryType,
  type ExpenseCategoryType,
  type IncomeCategoryType,
} from "../../types/budget";

type EntryCategorySelectValue = ExpenseCategoryType | IncomeCategoryType | "";
type EntryCategoryProps = {
  value: EntryType;
};

export default function EntryCategory({ value }: EntryCategoryProps) {
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
        {value === "expense"
          ? EXPENSE_CATEGORIES.map((v) => <option key={v}>{v}</option>)
          : INCOME_CATEGORIES.map((v) => <option key={v}>{v}</option>)}
      </select>
    </div>
  );
}
