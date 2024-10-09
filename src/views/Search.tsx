import { useContext } from "react";

import { SearchContext } from "@src/context/SearchContext";
import ProductDisplay from "@components/Card";

export default function Search() {
  const { searchData } = useContext(SearchContext);

  return (
    <div className="max-h-screen overflow-auto">
      <ProductDisplay productData={searchData} />
    </div>
  );
}
