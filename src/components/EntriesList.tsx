import type { Entry } from "../types/budget";
import { loadEntries } from "../services/storage";

export default function EntriesList() {
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
    <div className="border border-purple-500 p-4 rounded-2xl flex flex-col w-full max-w-6xl mx-auto gap-2 bg-white/40 backdrop-blur shadow-xl">
      <table>
        <tr>
          <th>Category</th>
          <th>Note</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {EntyList.map((v) => (
          <tr>
            <td>{v.category}</td>
            <td>{v.note ?? ""}</td>
            <td>{v.amount}</td>
            <td>{formatDate(v.createdAt)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
