import AppLayout from "./layout/AppLayout";

import Search from "@views/Search";

import "@styles/main.scss";

function App() {
  return (
    <AppLayout>
      <main className="bg-neutral-200 w-full h-screen">
        <Search />
      </main>
    </AppLayout>
  );
}

export default App;
