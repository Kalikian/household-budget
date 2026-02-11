import AppLogo from "../components/AppLogo";
import EntriesList from "../components/EntriesList";
import EntryForm from "../components/form-components/EntryForm";

function App() {
  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex justify-center p-4">
        <EntryForm />
        <EntriesList />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
