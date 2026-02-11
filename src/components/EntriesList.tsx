import type { Entry } from "../types/budget";
import { loadEntries } from "../services/storage";

export default function EntriesList() {
  const EntyList: Entry[] = loadEntries();

  return (
    <div>
      {EntyList.map((v) => (
        <>
          <div>{v.category}</div>
          <div>{v.note ?? ""}</div>
          <div>{v.amount}</div>
          <div>{v.date}</div>
        </>
      ))}
    </div>
  );
}
