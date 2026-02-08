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
    <div className="flex items-center justify-between w-full">
      <label className="">Transaction type:</label>
      <select
        defaultValue=""
        name="selectedAction"
        className={`${actionStyles[selectedAction] ?? ""}`}
        value={selectedAction}
        onChange={handleChange}
      >
        <option className="text-red-800 bg-red-200">expense</option>
        <option className="text-green-800 bg-green-200">income</option>
      </select>
    </div>
  );
}
