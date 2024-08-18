import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieList = ({apiPath, title}) => {
  useUpdateTitle(title);

  const {data: movies} = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>))}
        </div>
      </section>
    </main>
  )
}
