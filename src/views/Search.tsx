import { useState } from "react";

import Card from "@components/Card";
import SearchBar from "@components/SearchBar";
import { IProduct } from "@src/interfaces/Product.interface";

export default function Search() {
  const [data, setData] = useState<IProduct[]>([]);

  return (
    <section className="w-full flex items-center justify-center p-10 flex-col">
      <SearchBar setData={setData} />
      <article className="mt-10 grid grid-cols-5 gap-20">
        {data.map((product) => (
          <Card key={product.asin} product={product} />
        ))}
      </article>
    </section>
  );
}
