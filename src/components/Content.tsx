import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';
import { Header } from "./Header";


export function Content() {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <Header />
      <main>
        <div className="movies-list">
         {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
        </div>
      </main>
    </>
  )
}