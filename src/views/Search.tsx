import { useContext } from "react";

import { SearchContext } from "@src/context/SearchContext";
import ProductDisplay from "@components/Card";

export default function Search() {
  const { searchData, pagination, changePage } = useContext(SearchContext);
  const pages = Math.round(pagination.current.total.value / 12);
  return (
    <div className="overflow-auto h-full flex justify-center item-center flex-col">
      <ProductDisplay productData={searchData} />

      {/* Pagination */}
      <ul className="w-full h-full flex justify-center gap-3">
        {new Array(pages).fill("").map((_, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                pagination.current.from = 12 * i;
                changePage();
              }}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
