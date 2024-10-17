import { searchItem } from "@src/api/search";
import { IPagination } from "@src/interfaces/Pagination.interface";
import { IProduct } from "@src/interfaces/Product.interface";
import {
  createContext,
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

interface ISearchContext {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchData: IProduct[];
  setSearchData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  pagination: React.MutableRefObject<{
    total: {
      value: number;
      relation: string;
    };
    to: number;
    from: number;
  }>;
  changePage: () => void;
}

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext
);
export default function SearchProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState<IProduct[]>([]);
  const pagination = useRef<IPagination>({
    total: { value: 0, relation: "" },
    to: 12,
    from: 0,
  });

  const changePage = useCallback(() => {
    searchItem(searchInput, pagination.current).then(
      ({ data, pagination: resPagination }) => {
        setSearchData(data);
        pagination.current = resPagination;
      }
    );
  }, [searchInput]);

  useEffect(() => {
    searchItem(searchInput, pagination.current).then(
      ({ data, pagination: resPagination }) => {
        setSearchData(data);
        pagination.current = resPagination;
      }
    );
  }, [searchInput, pagination]);

  const value = useMemo(
    () => ({
      searchData,
      setSearchData,
      pagination,
      searchInput,
      setSearchInput,
      changePage,
    }),
    [
      searchData,
      setSearchData,
      pagination,
      searchInput,
      setSearchInput,
      changePage,
    ]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
