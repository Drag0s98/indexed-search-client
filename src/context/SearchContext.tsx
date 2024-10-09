import { IProduct } from "@src/interfaces/Product.interface";
import { createContext, useMemo, useState } from "react";

interface ISearchContext {
  searchData: IProduct[];
  setSearchData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext
);
export default function SearchProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchData, setSearchData] = useState<IProduct[]>([]);

  const value = useMemo(
    () => ({ searchData, setSearchData }),
    [searchData, setSearchData]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
