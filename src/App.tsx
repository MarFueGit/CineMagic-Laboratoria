import { useEffect} from "react";
import "./App.css";
import { getMovies } from "../src/services/movies.service.ts";
import { Movie } from "./types/types.ts";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import SeccionPrincipal from "./components/SeccionPrincipal.tsx";
import Pagination from "./components/Pagination.tsx";
import { useAppState } from "./AppStateContext.tsx";

/* La funcion App utiliza los hooks de estado y efecto de react para obtener una lista de peliculas y actualizar
el estado de la aplicacion con los datos obtenidos */
function App() {
  // Declaramos el estado global.
  const { appState, setAppState } = useAppState();

  //Como al iniciar la aplicacion, no tenemos ningun filtro, lo ponemos como ""
  useEffect(() => {
    //Hoot de efecto (useEffect)
    getMovies(appState.page, appState.gender, appState.initialYear, appState.finalYear, appState.sortBy)
      .then((data: Movie[]) => {
        console.log("MOVIES: ", data);
        console.log("gender:", appState.gender);
        console.log("initialYear", appState.initialYear);
        console.log("finalYear:", appState.finalYear);
        console.log("sortBy:", appState.sortBy);
        setAppState(prevState => ({
          ...prevState,
          movies: data, 
        }));
    
      })
      .catch((error) => console.error(error));
  }, [appState.gender, appState.initialYear, appState.finalYear, appState.sortBy, appState.page]);

  /* Renderizamos una estructura de elementos Html y componentes de react para representar la interfaz de la aplicacion*/
  return (
    <main>
      <Sidebar
        setGender={(gender: number) => {
          setAppState((prevState) => ({
            ...prevState,
            gender: gender,
          }));
        }}
        gender={appState.gender}
        setSortBy={(sortBy: string) => {
          setAppState((prevState) => ({
            ...prevState,
            sortBy: sortBy
          }));
        }}
      />
      <div className="header">
        <Header />
        <SeccionPrincipal movies={appState.movies} />
        <Pagination setPage={(page: number) => {
          setAppState((prevState) => ({
            ...prevState,
            page: page
          }));
        }} 
        page={appState.page} />
        <footer className="pie-page">
          🍿Web de peliculas Hecho por: Maricela Fuentes 🍿
        </footer>
      </div>
    </main>
  );
}

export default App;
