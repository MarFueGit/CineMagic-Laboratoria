import React, {useEffect, useState} from "react";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movie.detail.service";
import { MovieDetail } from "../types/types";

export default function MovieDetails() {

  const [movie, setMovie] = useState<MovieDetail>()

  const {movieId} = useParams()
  useEffect(() => {
    getMovieDetails(Number(movieId))
    .then((data) => {
      console.log("INFO: ", data)
      setMovie(data)
    })
    .catch((error) => console.log("ERROR: ", error))
  }, [])
  

  return (
    <div className="wapper">
      <div className="window">
        <img
          className="movie-img"
          src="https://static.posters.cz/image/350/182857.jpg"
          alt=""
        />
        <div className="details">
          <p className="modal-detail">{movie?.original_title}</p>
          <p>2020</p>
          <p className="reseña">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            dolor. Cum consequuntur suscipit in alias magni odit aliquam autem
            quasi laudantium? Vitae voluptate dolor illum, quasi ipsum
            dignissimos nam ducimus?
          </p>
          <p>Acción</p>
          <p> 100%</p>
          <p>Total de votos</p>
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
