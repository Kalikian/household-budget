import { saveEntries } from "../../services/storage";

export default function ActionButtons() {
  return (
    <div className="flex flex-row gap-2">
      <button
        className="btn bg-green-500 hover:bg-green-600 "
        type="button"
        aria-label="Submit Entry"
        onClick={() => saveEntries}
      >
        Submit The Entry
      </button>
      <button
        className="btn bg-gray-400 hover:bg-gray-500"
        type="button"
        aria-label="Reset"
      >
        Reset
      </button>
    </div>
  );
}
