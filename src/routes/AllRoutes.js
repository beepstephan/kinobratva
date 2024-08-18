import {Routes, Route} from "react-router-dom";
import {MovieList, MovieDetail, Search, About, PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <div className="bg-amber-100 dark:bg-zinc-900">
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Головна"/>}/>
            <Route path="movie/:id" element={<MovieDetail />}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Популярні"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Найкращі"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Майбутні"/>} />
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="about" element={<About title="Про застосунок"/>}/>
            <Route path="*" element={<PageNotFound title="Сторінку не знайдено" />}/>
        </Routes>
    </div>
  )
}
