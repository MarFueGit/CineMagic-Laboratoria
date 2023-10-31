import  { useEffect, useState } from "react";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movie.detail.service";
import { Genre, MovieDetail, Start } from "../types/types";

export default function MovieDetails() {
  const [movie, setMovie] = useState<MovieDetail>();

  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(Number(movieId))
      .then((data) => {
        console.log("INFO: ", data);
        setMovie(data);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, []);

  const getTotalStart = (vote_average: number): number => {
    const result = (vote_average * 5) / 10.0;
    const starts = Math.round(result);
    return starts;
  };

  const renderStarts = (starts: number): Start[] => {
    const arrayStarts = [];

    for (let index = 0; index <= 5; index++) {
      if (index + 1 <= starts) {
        arrayStarts.push({ start: index + 1, status: true });
      } else if (index + 1 <= 5) {
        arrayStarts.push({ start: index + 1, status: false });
      }
    }
    return arrayStarts;
  };

  return (
    <div className="wapper">
      <div className="window">
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w154/${movie?.poster_path}`}
          alt=""
        />
        <div className="details">
          <p className="modal-detail">{movie?.title}</p>
          <p>{new Date(movie?.release_date || "").getFullYear()}</p>
          <p className="reseña">{movie?.overview}</p>
          <p>{movie?.genres.map((genre: Genre) => genre.name).join(", ")}</p>
          <p> Promedio de votos : {movie?.vote_average.toFixed(2)}%</p>
          <p>
            Total de votos : {movie?.vote_count}{" "}
            {renderStarts(getTotalStart(movie?.vote_average || 0)).map(
              (start: Start) =>
                start.status ? (
                  <i className="fa-solid fa-star" />
                ) : (
                  <i className="fa-regular fa-star" />
                )
            )}
          </p>
        </div>
      </div>
      <div className="background">
        <Link className="closeBtn" to={"/"}>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <span>Regresar a movie</span>
      </div>
    </div>
  );
}
