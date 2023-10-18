import React, { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "../src/services/movies.service.ts";
import { Movie } from "./types/types.ts";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import SeccionPrincipal from "./components/SeccionPrincipal.tsx";
import Pagination from "./components/Pagination.tsx";

/* La funcion App utiliza los hooks de estado y efecto de react para obtener una lista de peliculas y actualizar
el estado de la aplicacion con los datos obtenidos */
function App() {
  const [movies, setMovies] = useState<Movie[]>([]); //hook de estado (useState)
  const [page, setPage] = useState<number>(1);
  useEffect(() => { //Hoot de efecto (useEffect)
    getMovies(page)
      .then((data: Movie[]) => {
        console.log("MOVIES: ", data);
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page]);
/* Renderizamos una estructura de elemntos Html y componentes de react para representar la interfaz de la aplicacion*/
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
