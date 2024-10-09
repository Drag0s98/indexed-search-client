import { searchItem, suggestionRequest } from "@src/api/search";
import { SearchContext } from "@src/context/SearchContext";
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { setSearchData: setData } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    [{ prefix: string; id: string }] | []
  >([]);

  const handleOnChange = async (text: string): Promise<void> => {
    setSearchValue(text);
    const data = await suggestionRequest(text);
    setSuggestions(data);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await searchItem(searchValue);
    setData(data);
    setSuggestions([])
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden md:flex flex-grow max-w-xl mx-4"
    >
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchValue}
          onChange={(element) => handleOnChange(element.target.value)}
        />
        {suggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg">
            {suggestions.map(({ prefix, id }) => (
              <button
                key={id}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchValue(prefix)
                  setSuggestions([])
                }}
              >
                {prefix}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-yellow-400 text-gray-900 px-4 rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        <FaSearch />
      </button>
    </form>
  );
}
