import { Link } from "react-router-dom";
import FilmImgNotFound from "../assets/images/backup.png"; 

export const Card = ({movie}) => {
  const {id, title, overview, poster_path} = movie;
  const movieImg = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : FilmImgNotFound;
  const checkedOverview = overview ? overview : "Опису фільму не виявлено."
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={movieImg} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{checkedOverview}</p>
      </div>
    </div>
  )
}
