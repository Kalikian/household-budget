import type { Entry } from "../types/budget";
import { loadEntries } from "../services/storage";
import Balance from "./Balance";
import ClearEntriesButton from "./ClearEntriesButton";
import Trash from "./ui/trash";

type EntriesListProps = {
  clearStateEntries: () => void;
};

export default function EntriesList({ clearStateEntries }: EntriesListProps) {
  const EntyList: Entry[] = loadEntries();

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
        <tr className="border-b border-gray-400 ">
          <th>Category</th>
          <th>Note</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {EntyList.map((v) => (
          <tr
            className={`${v.type === "income" ? "text-green-600" : "text-red-600"} border-b border-gray-400 hover:bg-blue-50 transition`}
          >
            <td className="text-center p-2">{v.category}</td>
            <td className="text-center p-2">{v.note ?? "-"}</td>
            <td className="text-center p-2">
              {`${v.type === "income" ? `+ ${v.amount} ` : `- ${v.amount}`}`}
            </td>
            <td className="text-center p-2">{formatDate(v.createdAt)}</td>
            <td>
              <button
                className="transition-transform duration-200 ease-out hover:scale-125"
                aria-label="Delete"
              >
                <Trash />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <Balance entries={EntyList} />
      <ClearEntriesButton clearStateEntries={clearStateEntries} />
    </div>
  );
}
