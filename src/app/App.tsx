import { useState } from "react";
import AppLogo from "../components/AppLogo";
import EntriesList from "../components/EntriesList";
import EntryForm from "../components/form-components/EntryForm";
import { clearEntries, loadEntries, saveEntries } from "../services/storage";
import type { Entry } from "../types/budget";
import ClearEntriesButton from "../components/ClearEntriesButton";

function App() {
  const [entries, setEntries] = useState(loadEntries());

  function addEntry(entry: Entry): void {
    const newEntries: Entry[] = [entry, ...entries];
    setEntries(newEntries);
    saveEntries(newEntries);
  }

  function clearStateEntries(): void {
    clearEntries();
    setEntries([]);
  }

  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex flex-wrap justify-center p-4 gap-10">
        <EntryForm addEntry={addEntry} />
        <EntriesList clearStateEntries={clearStateEntries} />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
