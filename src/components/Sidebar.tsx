import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Genre } from "../types/types";
import { getGenres } from "../services/genres.service.ts";
import "./Sidebar.css";

/* Define los tipos de propiedades que espera recibir el sidebar */
interface SidebarProps {
  setGender: Dispatch<SetStateAction<number>>;
  gender: number;
  setInitialYear: Dispatch<SetStateAction<string>>;
  setFinalYear: Dispatch<SetStateAction<string>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}
export default function Sidebar({
  setGender,
  gender,
  setInitialYear,
  setFinalYear,
  setSortBy
}: SidebarProps) {
  // Aqui mandamos a llamar los generos
  const [genres, setGenres] = useState<Genre[]>([]); //hook de estado (useState) para guardar  el array de generos
  // Ahora lo mando a llamar
  useEffect(() => {
    //Hoot de efecto (useEffect)
    getGenres()
      .then((data: Genre[]) => {
        console.log("GENEROS: ", data);
        setGenres(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="sidebar-generos">
      <h3 className="sidebar-title">🍿Generos</h3>
      <div className="contenedor-generos" id="filtroGeneros">
        {genres?.map((genre: Genre, i: number) => (
          <button
            className={genre.id === gender ? "btn active" : "btn"}
            onClick={() => {
              setGender(genre.id);
            }}
            key={i}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <h3 className="sidebar-año">Año</h3>
      <div className="container-inputs">
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1950"
          max="2023"
          maxLength={4}
          placeholder="1950"
          data-testid={"aniosMin"}
          onChange={(event) => {
            console.log("initialYear input:", event.target.value);
            const formateDate = `${event.target.value}-01-01`
            setInitialYear(formateDate);
          }}
        />
        <span className="span-año">-</span>
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1950"
          max="2023"
          maxLength={4}
          placeholder="2023"
          data-testid={"aniosMax"}
          onChange={(event) => {
            console.log("finalYear input:", event.target.value);
            const formateDate = `${event.target.value}-12-31`
            setFinalYear(formateDate);
          }}
        />
      </div>
      <div className="sidebar-ordenar ">
        <select
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
          <option value="vote_count-desc">Mas votadas</option>
        </select>
      </div>
    </div>
  );
}
