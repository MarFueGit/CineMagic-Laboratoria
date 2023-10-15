import React, { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "../src/services/movies.service.ts";
import { Movie } from "./types/types.ts";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import SeccionPrincipal from "./components/SeccionPrincipal.tsx";
import Pagination from "./components/Pagination.tsx";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getMovies(page)
      .then((data: Movie[]) => {
        console.log("MOVIES: ", data);
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <main>
      <Sidebar />
      <div className="header">
        <Header />
        <SeccionPrincipal movies={movies} />
        <Pagination setPage={setPage} page={page} />
      </div>
    </main>
  );
}

export default App;
