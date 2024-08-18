import { Button } from "../components";

import { Link } from "react-router-dom";

import PnFImg from "../assets/images/pagenotfound.png";
import { useEffect } from "react";

export const PageNotFound = ({title}) => {

  useEffect(() => {
    document.title = `${title} • Кінобратва`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-zinc-900 dark:text-stone-100 font-bold my-10">Йой, шось пішло не так...</p>
          <div className="max-w-40 max-h-40">
            <img className="rounded" src={PnFImg} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>На головну</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
