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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzhhOTk0NjJlNGMyMWQ2NDkzN2ZiZTNiM2Q5MGY0NCIsInN1YiI6IjYyYTc1YTE3ZWIxNGZhMDlkZGI3M2FlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-Rgg9jxaTQfTR4PnlC9tdOp5wEsFlJcu8vIV6L-xbE"
      }
    };
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=${page}&primary_release_date.gte=${initialYear}&primary_release_date.lte=${finalYear}&with_genres=${
      genre > 0 ? genre : ""
    }&sort_by=${sortBy}`

    fetch(url,
      // se utiliza la funcion fetch para realizar una solicitud HTTP GET a una API.
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
