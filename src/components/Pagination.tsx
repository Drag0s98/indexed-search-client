import { IPagination } from "@src/interfaces/Pagination.interface";
import React from "react";

interface Props {
  pagination: React.MutableRefObject<IPagination>;
  changePage: () => void;
}

export default function Pagination({
  pagination,
  changePage,
}: Readonly<Props>) {
  const pages = Math.round(pagination.current.total.value / 12);

  return (
    <div className="flex flex-col items-center mb-6">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-yellow-400">
          {pagination.current.to + pagination.current.from}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-yellow-400">
          {pages}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-yellow-400">
          {pagination.current.total.value}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-yellow-400 bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            pagination.current.from = pagination.current.from - 12;
            changePage();
          }}
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => {
            pagination.current.from = pagination.current.from + 12;
            changePage();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
