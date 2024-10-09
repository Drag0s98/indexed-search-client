import AppLayout from "./layout/AppLayout";

import Search from "@views/Search";

import "@styles/main.scss";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <AppLayout>
        <main className="bg-neutral-200 w-full h-screen">
          <Search />
        </main>
      </AppLayout>
    </SearchProvider>
  );
}

export default App;
