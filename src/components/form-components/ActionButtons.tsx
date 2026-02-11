export default function ActionButtons() {
  return (
    <div className="flex flex-row gap-2">
      <button
        className="btn bg-green-500 hover:bg-green-600 "
        type="submit"
        aria-label="Submit Entry"
      >
        Submit The Entry
      </button>
      <button
        className="btn bg-gray-400 hover:bg-gray-500"
        type="reset"
        aria-label="Reset"
      >
        Reset
      </button>
    </div>
  );
}
