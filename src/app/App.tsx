import { useState } from "react";
import AppLogo from "../components/AppLogo";

type SelectAction = "expense" | "income";

function App() {
  const [selectedAction, setSelectedAction] = useState<SelectAction>("expense");

  const actionStyles = {
    income: "text-green-800 bg-green-200",
    expense: "text-red-800 bg-red-200",
  };

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAction(e.target.value as SelectAction);
  }

  return (
    <>
      <header className="flex justify-center mt-4 mb-4">
        <AppLogo />
      </header>
      <main className="mt-4 mb-4">
        <label className="flex justify-center">
          select the transaction form:
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
      </main>
    </>
  );
}

export default App;
