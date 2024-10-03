export default function SearchBar() {
  return (
    <article className="w-96">
      <form className="w-full" action="">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="outline-none p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg dark:focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#febd69] rounded-e-lg border border-[#febd69] hover:bg-[#dfa65d]"
          >
            <span
              className="iconify mdi--search"
              style={{ width: "24px", height: "24px" }}
            ></span>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </article>
  );
}
