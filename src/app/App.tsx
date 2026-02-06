import { useState } from "react";
import AppLogo from "../components/AppLogo";

function App() {
  const [selectedAction, setSelectedAction] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAction(e.target.value);
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
            className="border-2 ml-2 rounded-md"
            value={selectedAction}
            onChange={handleChange}
          >
            <option className=""></option>
            <option className="text-green-400">income</option>
            <option className="text-red-400">expense</option>
          </select>
        </label>
      </main>
    </>
  );
}

export default App;
