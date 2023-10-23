import { Movie } from "../types/types";

export const getMovies = (page: number, genre:number, initialYear:string, finalYear:string): Promise<Movie[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer "
      }
    };

    fetch(  // se utiliza la funcion fetch para realizar una solicitud HTTP GET a una API.
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_date.gte=${initialYear}&primary_release_date.lte=${finalYear}&sort_by=popularity.desc&with_genres=${genre > 0 ? genre:''}`,
      options
    )
      .then((response) => response.json())
      .then((response) => resolve(response?.results))
      .catch((err) => reject(err));
  });
