import { useEffect, useState } from "react";
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
  const [movies, setMovies] = useState<Movie[]>([]); //hook de estado (useState) para guardar las movies de la API
  const [page, setPage] = useState<number>(1); // hook de estado (useState) para tener el control de la pagina
  // haremos un hook para guardar y controlar el genero que el usuario de click
  const [gender, setGender] = useState<number>(0); //hook de estado (useSTate) para controlar el genero
  const [initialYear, setInitialYear] = useState<string>("1900-01-01");
  const [finalYear, setFinalYear] = useState<string>("2023-12-31");
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

  //Como al iniciar la aplicacion, no tenemos ningun filtro, lo ponemos como ""
  useEffect(() => {
    //Hoot de efecto (useEffect)
    getMovies(page, gender, initialYear, finalYear, sortBy)
      .then((data: Movie[]) => {
        console.log("MOVIES: ", data);
        console.log("gender:", gender);
        console.log("initialYear", initialYear);
        console.log("finalYear:", finalYear);
        console.log("sortBy:", sortBy);
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page, gender, initialYear, finalYear, sortBy]);

  /* Renderizamos una estructura de elementos Html y componentes de react para representar la interfaz de la aplicacion*/
  return (
    <main>
      <Sidebar
        setGender={setGender}
        gender={gender}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
        setSortBy={setSortBy}
      />
      <div className="header">
        <Header />
        <SeccionPrincipal movies={movies} />
        <Pagination setPage={setPage} page={page} />
        <footer className="pie-page">🍿Web de peliculas Hecho por: Maricela Fuentes 🍿</footer>
      </div>
    </main>
     
  );
}

export default App;
