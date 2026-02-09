import React, { useState } from "react";
import type { EntryType } from "../types/budget";

export default function EntryTypeSelect() {
  const [selectedAction, setSelectedAction] = useState<EntryType>("expense");

  const actionStyles = {
    income: "text-green-800 bg-green-200",
    expense: "text-red-800 bg-red-200",
  };

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAction(e.target.value as EntryType);
  }
  return (
    <div className="flex flex-col md:item start">
      <label id="selectedAction">Entry type:</label>
      <select
        name="selectedAction"
        className={`border border-solid rounded-md border-gray-400 p-2 ${actionStyles[selectedAction] ?? ""}`}
        value={selectedAction}
        onChange={handleChange}
      >
        <option className="text-red-800 bg-red-200">expense</option>
        <option className="text-green-800 bg-green-200">income</option>
      </select>
    </div>
  );
}
