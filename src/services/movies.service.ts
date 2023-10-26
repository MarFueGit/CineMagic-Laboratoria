import { Movie } from "../types/types";

export const getMovies = (
  page: number,
  genre: number,
  initialYear: string,
  finalYear: string,
  sortBy: string
): Promise<Movie[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer"
      }
    };
    const x = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=${page}&primary_release_date.gte=${initialYear}&primary_release_date.lte=${finalYear}&with_genres=${
      genre > 0 ? genre : ""
    }&sort_by=${sortBy}`

    fetch( x
      // se utiliza la funcion fetch para realizar una solicitud HTTP GET a una API.
      ,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // Array de movies de la API
        const movies: Movie[] = response?.results;
        const newMovies: Movie[] = movies.filter((movie: Movie) => movie.poster_path !== null)
        resolve(newMovies);
      })
      .catch((err) => reject(err));
  });
