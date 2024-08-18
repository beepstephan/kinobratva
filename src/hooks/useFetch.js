import { useEffect, useState } from "react"

export const useFetch = (apiPath, query="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=62546785c60a10fc4208302d6b0be2f9&language=uk-UA&query=${query}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data }
}
