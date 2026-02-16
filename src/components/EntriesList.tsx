import type { Entry } from "../types/budget";
import Balance from "./Balance";
import ClearEntriesButton from "./ClearEntriesButton";
import Trash from "./ui/trash";

type EntriesListProps = {
  entries: Entry[];
  clearStateEntries: () => void;
  deleteEntry: (entry: Entry) => void;
};

export default function EntriesList({
  entries,
  clearStateEntries,
  deleteEntry,
}: EntriesListProps) {
  function formatDate(iso: string): string {
    const formatted = new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(iso));
    return formatted;
  }

  return (
    <div className="p-4 rounded-2xl flex flex-col w-full max-w-6xl mx-auto gap-2 ">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-400 ">
            <th>Category</th>
            <th>Note</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {entries.map((v) => (
            <tr
              key={v.id}
              className={`${v.type === "income" ? "text-green-600" : "text-red-600"} border-b border-gray-400 hover:bg-blue-50 transition`}
            >
              <td className="text-center p-2">{v.category}</td>
              <td className="text-center p-2" key={v.note}>
                {v.note ?? "-"}
              </td>
              <td className="text-center p-2" key={v.amount}>
                {`${v.type === "income" ? `+ ${v.amount} ` : `- ${v.amount}`}`}
              </td>
              <td className="text-center p-2" key={v.createdAt}>
                {formatDate(v.createdAt)}
              </td>
              <td>
                <button
                  className="transition-transform duration-200 ease-out hover:scale-125"
                  aria-label="Delete"
                  type="button"
                  onClick={() => deleteEntry(v)}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Balance entries={entries} />
      <ClearEntriesButton clearStateEntries={clearStateEntries} />
    </div>
  );
}
