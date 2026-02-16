type ClearEntriesButton = {
  clearStateEntries: () => void;
};

export default function ClearEntriesButton({
  clearStateEntries,
}: ClearEntriesButton) {
  return (
    <button
      className="btn flex self-center w-fit bg-red-500 hover:bg-red-600 "
      type="button"
      onClick={clearStateEntries}
    >
      Clear Entries
    </button>
  );
}
