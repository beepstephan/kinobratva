import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {data: movies} = useFetch(apiPath, query);

  useUpdateTitle(`Фільми подібні до "${query}" • Кінобратва`);

  return (
    <main>
      <section className="py-7">
        <p className="text-2xl text-neutral-950 dark:text-stone-100">{movies.length !== 0 ? `Результати за пошуком '${query}'` : `Не виявлено результатів за пошуком '${query}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>))}
        </div>
      </section>
    </main>
  )
}
