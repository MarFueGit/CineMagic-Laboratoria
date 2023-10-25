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
          "Bearer "
      }
    };

    fetch(
      // se utiliza la funcion fetch para realizar una solicitud HTTP GET a una API.
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=${page}&primary_release_date.gte=${initialYear}&primary_release_date.lte=${finalYear}&with_genres=${
        genre > 0 ? genre : ""
      }&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // Array de movies de la API
        let movies: Movie[] = response?.results;
        if (sortBy === "asc") {
          movies = orderAsc(movies);
        } else {
          movies = orderDesc(movies);
        }
        resolve(movies);
      })
      .catch((err) => reject(err));
  });

const orderDesc = (movies: Movie[]): Movie[] =>
  movies.sort((a, b) => {
    if (new Date(a.release_date) > new Date(b.release_date)) {
      return -1;
    } else if (new Date(a.release_date) < new Date(b.release_date)) {
      return 1;
    } else {
      return 0;
    }
  });
const orderAsc = (movies: Movie[]) =>
  movies.sort((a, b) => {
    if (new Date(a.release_date) < new Date(b.release_date)) {
      return -1;
    } else if (new Date(a.release_date) > new Date(b.release_date)) {
      return 1;
    } else {
      return 0;
    }
  });
