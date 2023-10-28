import { Genre } from "../types/types";

// Esta function obtiene los generos de la API y los retorna como un array de Generos
export const getGenres = (): Promise<Genre[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer "
      }
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options)
      .then((response) => response.json())
      .then((response) => resolve(response?.genres))
      .catch((err) => reject(err));
  });
