import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Genre } from "../types/types";
import { getGenres } from "../services/genres.service.ts";
import "./Sidebar.css";

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
      <h3 className="sidebar-año">Año y Fecha</h3>
      <div className="container-inputs">
        <input
          className="sidebar-input"
          type="date"
          id="añosMin"
          // min="1900"
          // max="2023"
          // maxLength={4}
          placeholder="1900-01-01"
          data-testid={"aniosMin"}
          onChange={(event) => {
            const date = new Date(event.target.value);
            console.log("initialYear input:", event.target.value);
            const formateDate = `${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
            setInitialYear(formateDate);
          }}
        />
        <span>-</span>
        <input
          className="sidebar-input"
          type="date"
          id="añosMin"
          // min="1900"
          // max="2023"
          // maxLength={4}
          placeholder="2023-12-31"
          data-testid={"aniosMax"}
          onChange={(event) => {
            const date = new Date(event.target.value);
            console.log("finalYear input:", date);
            const formateDate = `${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
            setFinalYear(formateDate);
          }}
        />
      </div>
      {/* <div className="sidebar-buscar" id="btn-buscar">
        <button className="btn btn--100 btn--amarillo">Buscar</button>
      </div> */}
      <div className="sidebar-ordenar ">
        <select
          name="ordenar"
          id="ordenar"
          data-testid={"ordenBy"}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option value="desc"> Ordenar por</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}
