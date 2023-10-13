import React, { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "../src/services/movies.service.ts";
import { Movie } from "./types/types.ts";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies()
      .then((data: Movie[]) => {
        console.log("MOVIES: ", data);
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="header">
        <Header />
        <div className="main-grid">
          {movies?.map((movie: Movie) => (
            <div className="main-media">
              <a href="#" className="main__media-thumb">
                <img
                  className="main__media-img"
                  src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                  alt=""
                />
              </a>
              <p className="main__media-titulo">{movie.title}</p>
              <p className="main__media-fecha">
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          ))}
        </div>
        {/* <footer className="footer">Hecho por Maricela Fuentes</footer> */}
      </div>
    </main>
  );
}

export default App;
