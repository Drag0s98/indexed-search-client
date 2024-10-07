import { searchItem, suggestionRequest } from "@src/api/search";
import { IProduct } from "@src/interfaces/Product.interface";
import { useState } from "react";

interface Props {
  readonly setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export default function SearchBar({ setData }: Props) {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    [{ prefix: string; id: string }] | []
  >([]);

  const handleOnChange = async (text: string): Promise<void> => {
    setSearchValue(text);
    setShowSuggestions(true);
    const data = await suggestionRequest(text);
    setSuggestions(data);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await searchItem(searchValue);
    setData(data);
    setShowSuggestions(false);
  };

  return (
    <article className="w-96">
      <form
        className="w-full"
        action=""
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="outline-none p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg dark:focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            value={searchValue}
            required
            onChange={(element) => handleOnChange(element.target.value)}
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
      {showSuggestions && suggestions.length > 0 && (
        <div className="bg-neutral-100 w-[88%] border-t">
          {suggestions.map(({ prefix, id }) => (
            <button
              className="hover:bg-neutral-200 text-left"
              key={id}
              onClick={() => {
                setSearchValue(prefix);
              }}
            >
              <p className="font-bold">{prefix}</p>
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
