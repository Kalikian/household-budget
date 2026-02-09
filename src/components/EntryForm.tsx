import AmountInput from "./AmountInput";
import EntryCategory from "./EntryCategory";
import EntryTypeSelect from "./EntryTypeSelect";
import Note from "./Note";

export default function EntryForm() {
  return (
    <div className=" w-full max-w-4xl mx-auto">
      <EntryTypeSelect />
      <div className="flex flex-wrap justify-center md:justify-between lg:flex-nowrap">
        <AmountInput />
        <EntryCategory />
        <Note />
      </div>
    </div>
  );
}
