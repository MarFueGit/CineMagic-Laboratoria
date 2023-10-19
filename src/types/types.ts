//Tipo de datos "Movie"se utiliza para representar informacion sobre una pelicula en Typescript.
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Creamos el tipo de dato Genre, para representar un Genre que viene de la api
export type Genre = {
  id: number;
  name: string;
};