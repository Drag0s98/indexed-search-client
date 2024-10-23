import { useContext } from "react";

import { SearchContext } from "@src/context/SearchContext";
import ProductDisplay from "@components/Card";
import Pagination from "@components/Pagination";

export default function Search() {
  const { searchData, pagination, changePage } = useContext(SearchContext);

  return (
    <div className="overflow-auto h-full flex justify-center item-center flex-col">
      <ProductDisplay productData={searchData} />

      {searchData.length > 0 && (
        <Pagination changePage={changePage} pagination={pagination} />
      )}
    </div>
  );
}
