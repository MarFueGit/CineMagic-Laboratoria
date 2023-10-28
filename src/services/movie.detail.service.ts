import { MovieDetail } from "../types/types";

// Esta function obtiene los generos de la API y los retorna como un array de Generos
export const getMovieDetails = (movieId: number): Promise<MovieDetail> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer "
      }
    };
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
