import { useState } from "react";
import ActionButtons from "./ActionButtons";
import AmountInput from "./AmountInput";
import EntryCategory from "./EntryCategory";
import EntryTypeSelect from "./EntryTypeSelect";
import Note from "./Note";
import type { EntryType } from "../types/budget";

export default function EntryForm() {
  const [selectedAction, setSelectedAction] = useState<EntryType>("expense");

  function handleChange(next: EntryType) {
    setSelectedAction(next);
  }
  return (
    <form className="border border-purple-500 p-4 rounded-2xl flex flex-col w-full max-w-4xl mx-auto gap-2 bg-white/40 backdrop-blur shadow-xl">
      <EntryTypeSelect
        value={selectedAction}
        handleChange={handleChange}
      ></EntryTypeSelect>
      <div className="flex flex-col justify-center  gap-2">
        <AmountInput />
        <EntryCategory value={selectedAction}></EntryCategory>
        <Note />
      </div>
      <ActionButtons />
    </form>
  );
}
