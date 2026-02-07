import AppLogo from "../components/AppLogo";
import TransactionTypeSelect from "../components/TransactionTypeSelect";

function App() {
  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex justify-center my-6">
        <TransactionTypeSelect />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
