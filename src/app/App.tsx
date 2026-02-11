import AppLogo from "../components/AppLogo";
import EntriesList from "../components/EntriesList";
import EntryForm from "../components/form-components/EntryForm";

function App() {
  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex flex-wrap justify-center p-4 gap-10">
        <EntryForm />
        <EntriesList />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
