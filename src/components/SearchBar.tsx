import { suggestionRequest } from "@src/api/search";
import { SearchContext } from "@src/context/SearchContext";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  isMobileMenuOpen?: boolean;
}

export default function SearchBar({ isMobileMenuOpen }: Props) {
  const { setSearchInput } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    [{ prefix: string; id: string }] | []
  >([]);

  const handleOnChange = async (text: string): Promise<void> => {
    setSearchValue(text);
    const data = await suggestionRequest(text);
    setSuggestions(data);
  };

  useEffect(() => {}, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchInput(searchValue);
    setSuggestions([]);
  };

  if (isMobileMenuOpen) {
    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchValue}
            onChange={(element) => handleOnChange(element.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-4 rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <FaSearch />
          </button>
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white mt-11 rounded-md shadow-lg">
              {suggestions.map(({ prefix, id }) => (
                <button
                  key={id}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchValue(prefix);
                    setSuggestions([]);
                  }}
                >
                  {prefix}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    );
  }

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
                  setSearchValue(prefix);
                  setSuggestions([]);
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
