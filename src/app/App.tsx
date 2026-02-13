import { useState } from "react";
import AppLogo from "../components/AppLogo";
import EntriesList from "../components/EntriesList";
import EntryForm from "../components/form-components/EntryForm";
import { loadEntries, saveEntries } from "../services/storage";
import type { Entry } from "../types/budget";

function App() {
  const [entries, setEntries] = useState(loadEntries());

  function addEntry(entry: Entry): void {
    const newEntries: Entry[] = [entry, ...entries];
    setEntries(newEntries);
    saveEntries(newEntries);
  }

  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex flex-wrap justify-center p-4 gap-10">
        <EntryForm addEntry={addEntry} />
        <EntriesList />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
