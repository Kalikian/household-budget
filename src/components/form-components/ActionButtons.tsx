type ActionButtonsProps = {
  resetEntries: () => void;
};

export default function ActionButtons({ resetEntries }: ActionButtonsProps) {
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
        type="button"
        aria-label="Reset"
        onClick={resetEntries}
      >
        Reset
      </button>
    </div>
  );
}
