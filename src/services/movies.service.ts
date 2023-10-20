import { Movie } from "../types/types";

export const getMovies = (page: number, genre:string): Promise<Movie[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzhhOTk0NjJlNGMyMWQ2NDkzN2ZiZTNiM2Q5MGY0NCIsInN1YiI6IjYyYTc1YTE3ZWIxNGZhMDlkZGI3M2FlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-Rgg9jxaTQfTR4PnlC9tdOp5wEsFlJcu8vIV6L-xbE"
      }
    };

    fetch(  // se utiliza la funcion fetch para realizar una solicitud HTTP GET a una API.
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
      options
    )
      .then((response) => response.json())
      .then((response) => resolve(response?.results))
      .catch((err) => reject(err));
  });
