import type { Entry } from "../types/budget";

type BalanceProps = {
  entries: Entry[];
};

export default function Balance({ entries }: BalanceProps) {
  function calculateBalance(entries: Entry[]): number {
    let balance = 0;
    entries.map((entry) => {
      if (typeof entry.amount === "string") {
        const entryAmount = Number(entry.amount);
        if (entry.type === "income") {
          balance += entryAmount;
        } else {
          balance -= entryAmount;
        }
      } else if (typeof entry.amount === "number") {
        if (entry.type === "income") {
          balance += entry.amount;
        } else {
          balance -= entry.amount;
        }
      }
    });
    return balance;
  }
  return (
    <div
      className={`border border-purple-500 flex self-end w-fit p-4 m-2 rounded-2xl gap-2 bg-white/40 backdrop-blur shadow-xl text-2xl ${calculateBalance(entries) > 0 ? "text-green-600" : "text-red-600"}`}
    >
      <span className="text-2xl text-black">Balance: </span>
      {calculateBalance(entries)}
    </div>
  );
}
