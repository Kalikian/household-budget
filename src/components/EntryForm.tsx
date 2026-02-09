import ActionButtons from "./ActionButtons";
import AmountInput from "./AmountInput";
import EntryCategory from "./EntryCategory";
import EntryTypeSelect from "./EntryTypeSelect";
import Note from "./Note";

export default function EntryForm() {
  return (
    <form className="border border-purple-500 p-4 rounded-2xl flex flex-col w-full max-w-4xl mx-auto gap-2 bg-white/40 backdrop-blur shadow-xl">
      <EntryTypeSelect />
      <div className="flex flex-col justify-center  gap-2">
        <AmountInput />
        <EntryCategory />
        <Note />
      </div>
      <ActionButtons />
    </form>
  );
}
