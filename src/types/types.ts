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

export type  ProductionCompanie = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export type ProductionCountrie = {
  iso_3166_1: string;
  name: string;
}

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// Tipo de dato MovieDetail para obtener los detalles de las peliculas.
export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanie[];
  production_countries: ProductionCountrie[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Start = {
  start: number;
  status: boolean;
}
