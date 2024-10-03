import Card from "@components/Card";
import SearchBar from "@components/SearchBar";

export default function Search() {
  return (
    <section className="w-full flex items-center justify-center p-10 flex-col">
      <SearchBar />
      <article className="mt-10 grid grid-cols-5 gap-20">
        {new Array(5).fill("").map((_, index) => (
          <Card key={index} />
        ))}
      </article>
    </section>
  );
}
