import AppLogo from "../components/AppLogo";

function App() {
  return (
    <>
      <body
        className={`min-h-screen bg-linear-to-br from-violet-900 to-slate-950 text-white`}
      >
        <header className="flex justify-center">
          <AppLogo />
        </header>
      </body>
    </>
  );
}

export default App;
