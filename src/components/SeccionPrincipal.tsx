import React from "react";
import { Movie } from "../types/types";

interface SeccionPrincipalProps {
  movies: Movie[];
}

export default function SeccionPrincipal({ movies }: SeccionPrincipalProps) {
  return (
    <div className="grid-movie">
      {movies?.map((movie: Movie, i: number) => (
        <div className="main-movie" key={i}>
          <a href="#" className="link-movie">
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt=""
            />
          </a>
          <p className="title-movie">{movie.title}</p>
          <p className="movie-date">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      ))}
    </div>
  );
}
