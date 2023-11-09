import { Link } from "react-router-dom";
import { Movie } from "../types/types";
import "./SeccionPrincipal.css";

//SeccionPrincipalProps contiene las props que le debe pasar a este componente
interface SeccionPrincipalProps { 
  movies: Movie[];
}
// Seccion principal retorna una lista de peliculas
export default function SeccionPrincipal({ movies }: SeccionPrincipalProps) {
  return (
    <div className="grid-movie">
      {movies?.map((movie: Movie, i: number) => (
        <div className="main-movie" key={i}>
          <Link to={`/details/${movie.id}`} className="link-movie">
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt=""
            />
          </Link>
          <p className="title-movie">{movie.title}</p>
          <p className="movie-date">
          {new Date(movie.release_date).getDate()}{'/'}{new Date(movie.release_date).getMonth() + 1}{'/'}{new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      ))}
    </div>
  );
}
