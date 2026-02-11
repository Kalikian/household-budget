import { useState } from "react";
import ActionButtons from "./ActionButtons";
import AmountInput from "./AmountInput";
import EntryCategory from "./EntryCategory";
import EntryTypeSelect from "./EntryTypeSelect";
import Note from "./Note";
import type {
  Entry,
  EntryType,
  ExpenseCategoryType,
  IncomeCategoryType,
} from "../../types/budget";
import { loadEntries, saveEntries } from "../../services/storage";

type EntryCategorySelectValue = ExpenseCategoryType | IncomeCategoryType | "";

export default function EntryForm() {
  const [selectedAction, setSelectedAction] = useState<EntryType>("expense");
  const [amount, setAmount] = useState<string | number>("");
  const [text, setText] = useState("");
  const [selectCategory, setSelectCategory] =
    useState<EntryCategorySelectValue>("");

  function handleEntyTypeChange(next: EntryType) {
    setSelectedAction(next);
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const regex = /^\d+(\.\d{0,2})?$/;
    if (inputValue === "") {
      setAmount("");
      return;
    }
    if (!regex.test(inputValue)) {
      return;
    }
    const numValue = Number(inputValue);
    setAmount(numValue);
  }

  function handleNoteChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectCategory(e.target.value as EntryCategorySelectValue);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const entry: Entry = {
      id: crypto.randomUUID(),
      type: selectedAction,
      amount: amount,
      category: selectCategory,
      createdAt: new Date().toISOString(),
      note: text,
    };

    const entries = loadEntries();
    saveEntries([entry, ...entries]);
  }

  return (
    <form
      className="border border-purple-500 p-4 rounded-2xl flex flex-col w-full max-w-6xl mx-auto gap-2 bg-white/40 backdrop-blur shadow-xl"
      onSubmit={handleSubmit}
    >
      <EntryTypeSelect
        value={selectedAction}
        handleChange={handleEntyTypeChange}
      ></EntryTypeSelect>
      <div className="flex flex-col justify-center  gap-2">
        <AmountInput value={amount} handleChange={handleAmountChange} />
        <EntryCategory
          actionValue={selectedAction}
          categoryValue={selectCategory}
          handleChange={handleCategoryChange}
        ></EntryCategory>
        <Note value={text} handleChange={handleNoteChange} />
      </div>
      <ActionButtons />
    </form>
  );
}
