import React, { useState } from "react";
import type { EntryType } from "../types/budget";

export default function TransactionTypeSelect() {
  const [selectedAction, setSelectedAction] = useState<EntryType>("expense");

  const actionStyles = {
    income: "text-green-800 bg-green-200",
    expense: "text-red-800 bg-red-200",
  };

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAction(e.target.value as EntryType);
  }
  return (
    <div>
      <label className="flex justify-center">
        Transaction type:
        <select
          defaultValue=""
          name="selectedAction"
          className={`border-2 ml-2 rounded-md  ${actionStyles[selectedAction] ?? ""}`}
          value={selectedAction}
          onChange={handleChange}
        >
          <option className="text-red-800 bg-red-200">expense</option>
          <option className="text-green-800 bg-green-200">income</option>
        </select>
      </label>
    </div>
  );
}
