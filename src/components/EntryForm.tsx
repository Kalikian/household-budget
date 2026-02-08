import AmountInput from "./AmountInput";
import EntryCategory from "./EntryCategory";
import EntryTypeSelect from "./EntryTypeSelect";

export default function EntryForm() {
  return (
    <div className="flex flex-col w-full max-w-xs">
      <EntryTypeSelect />
      <AmountInput />
      <EntryCategory />
    </div>
  );
}
