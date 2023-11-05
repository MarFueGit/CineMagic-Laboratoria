//Importamos diferentes funciones de react
import { useEffect } from "react";
import { Genre } from "../types/types"; // Importamos el tipo de dato Genre
import { getGenres } from "../services/genres.service.ts"; // Importamos el servicio getGenres que nos trae los generos de la API
import "./Sidebar.css";
import { useAppState } from "../AppStateContext.tsx";

/* Define los tipos de propiedades(props) que espera recibir el sidebar */
interface SidebarProps {
  setGender: (gender: number) => void; // Funcion que setea el genero a filtrar.
  gender: number; //Genero actual tipo number.
  setSortBy: (sortBy: string) => void; // Funcion que setea el ordenamiento de tipo string
}
// La funcion sidebar contiene nuestro component
export default function Sidebar({
  setGender,
  gender,
  setSortBy
}: SidebarProps) {
  // Aqui hacemos destructing de las props
  // Declaramos el estado global.
  const { appState, setAppState } = useAppState();
  // Ejecutamos useEffect al cargar el component por primera vez y cuando sucede efectos por ejemplo setear el valor de un hock.
  useEffect(() => {
    //Con esta funcion getGenres mandamos a traer los generos de la API
    getGenres()
      .then((data: Genre[]) => {
        console.log("GENEROS: ", data);
        setAppState((prevState) => ({
          ...prevState,
          genders: data
        })); //Seteamos los valores de la API en la variable genres
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="sidebar-generos">
      <h3 className="sidebar-title">🍿Generos</h3>
      <div className="contenedor-generos" id="filtroGeneros">
        {appState.genders?.map(
          (
            genre: Genre,
            i: number // Itero la variable genres y para cada genre renderizo un boton con su nombre
          ) => (
            <button
              className={genre.id === gender ? "btn active" : "btn"}
              onClick={() => {
                setGender(genre.id);
              }}
              key={i}
            >
              {genre.name}
            </button>
          )
        )}
      </div>
      <h3 className="sidebar-año">Año</h3>
      <div className="container-inputs">
        <input
        value={appState.initialYearInput}
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1950"
          max="2023"
          maxLength={4}
          placeholder="1950"
          data-testid={"aniosMin"}
          onChange={(event) => {
            // primero seteamos el valor de inicialYear
            console.log("initialYear input:", event.target.value);
            const formateDate = `${event.target.value}-01-01`;
            // seteamos el valor de inicialYearInput
            setAppState((prevState) => ({
              ...prevState,
              initialYear: formateDate,
              initialYearInput: Number(event.target.value)
            }));
          }}
        />
        <span className="span-año">-</span>
        <input
        value={appState.finalYearInput}
          className="sidebar-input"
          type="number"
          id="aniosMax"
          min="1950"
          max="2024"
          maxLength={4}
          placeholder="2023"
          data-testid={"aniosMax"}
          onChange={(event) => {
            //Primero seteamos el finalYear
            console.log("finalYear input:", event.target.value);
            const formateDate = `${event.target.value}-12-31`;
            // seteamos el finalYearInput
            setAppState((prevState) => ({
              ...prevState,
              finalYear: formateDate,
              finalYearInput: Number(event.target.value)
            }));
          }}
        />
      </div>
      <div className="sidebar-ordenar ">
        <select
          value={appState.sortBy}
          name="ordenar"
          id="ordenar"
          data-testid={"ordenBy"}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option value="popularity.desc"> Ordenar por</option>
          <option value="popularity.asc">Menos populares</option>
          <option value="popularity.desc">Más populares</option>
          <option value="revenue.asc">Menos taquillera</option>
          <option value="revenue.desc">Mas Taquillera</option>
          <option value="primary_release_date.asc">Mas antiguas</option>
          <option value="primary_release_date.desc">Recientes</option>
          <option value="vote_average.asc">Menos promediadas</option>
          <option value="vote_average.desc">Mas promediadas</option>
          <option value="vote_count.asc">Menos votadas</option>
          <option value="vote_count.desc">Mas votadas</option>
        </select>
      </div>
    </div>
  );
}
