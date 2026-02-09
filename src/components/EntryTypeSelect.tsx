import type { EntryType } from "../types/budget";

type EntryTypeSelectProps = {
  value: EntryType;
  handleChange: (next: EntryType) => void;
};

export default function EntryTypeSelect({
  value,
  handleChange,
}: EntryTypeSelectProps) {
  const actionStyles = {
    income: "text-green-800 bg-green-200",
    expense: "text-red-800 bg-red-200",
  };

  return (
    <div className="flex flex-col ">
      <label id="selectedAction">Entry type:</label>
      <select
        name="selectedAction"
        className={`border border-solid rounded-md border-gray-400 p-2 ${actionStyles[value] ?? ""}`}
        value={value}
        onChange={(e) => handleChange(e.target.value as EntryType)}
      >
        <option className="text-red-800 bg-red-200" value="expense">
          expense
        </option>
        <option className="text-green-800 bg-green-200" value="income">
          income
        </option>
      </select>
    </div>
  );
}
