import { Genre } from "../types/types";

// Esta function obtiene los generos de la API y los retorna como un array de Generos
export const getGenres = (): Promise<Genre[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzhhOTk0NjJlNGMyMWQ2NDkzN2ZiZTNiM2Q5MGY0NCIsInN1YiI6IjYyYTc1YTE3ZWIxNGZhMDlkZGI3M2FlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-Rgg9jxaTQfTR4PnlC9tdOp5wEsFlJcu8vIV6L-xbE"
      }
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => resolve(response?.genres))
      .catch((err) => reject(err));
  });
