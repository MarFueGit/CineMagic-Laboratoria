import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Genre } from "../types/types";
import { getGenres } from "../services/genres.service.ts";
import "./Sidebar.css";

interface SidebarProps {
  setGender: Dispatch<SetStateAction<number>>;
  gender: number;
}
export default function Sidebar({ setGender, gender }: SidebarProps) {
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
      <h3 className="sidebar-año">Años</h3>
      <div className="container-inputs">
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="1900"
        />
        <span>-</span>
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="2023"
        />
      </div>
      <div className="sidebar-buscar" id="btn-buscar">
        <button className="btn btn--100 btn--amarillo">Buscar</button>
      </div>
      <div className="sidebar-ordenar ">
        <select name="ordenar" id="ordenar" onChange={() => {}}>
          <option value="1"> Ordenar por</option>
          <option value="2">Ascendente</option>
          <option value="3">Descendente</option>
        </select>
      </div>
    </div>
  );
}
