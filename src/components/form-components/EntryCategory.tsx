import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
  type EntryCategorySelectValue,
  type EntryType,
} from "../../types/budget";

type EntryCategoryProps = {
  categoryValue: EntryCategorySelectValue;
  actionValue: EntryType;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function EntryCategory({
  categoryValue,
  actionValue,
  handleChange,
}: EntryCategoryProps) {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="category">Entry Category:</label>
      <select
        className="border border-solid rounded-md border-gray-400 p-2"
        id="category"
        name="category"
        onChange={handleChange}
        value={categoryValue}
      >
        <option className="text-gray-400" value="" disabled>
          -- Enter Category --
        </option>
        {actionValue === "expense"
          ? EXPENSE_CATEGORIES.map((v) => <option key={v}>{v}</option>)
          : INCOME_CATEGORIES.map((v) => <option key={v}>{v}</option>)}
      </select>
    </div>
  );
}
