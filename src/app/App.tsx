import AppLogo from "../components/AppLogo";
import TransactionForm from "../components/TransactionForm";

function App() {
  return (
    <>
      <header className="flex justify-center my-6">
        <AppLogo />
      </header>
      <main className="flex justify-center my-6">
        <TransactionForm />
      </main>
      <footer className="flex justify-center my-6"></footer>
    </>
  );
}

export default App;
