import { render, waitFor } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails";
import { BrowserRouter } from "react-router-dom";
jest.mock("../services/movie.detail.service", () => ({
  getMovieDetails: () =>
    new Promise((resolve) => {
      return resolve({
        adult: false,
        backdrop_path: "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
        belongs_to_collection: {
          id: 0,
          name: "",
          poster_path: "",
          backdrop_path: ""
        },
        budget: 14500000,
        genres: [
          {
            id: 28,
            name: "Acción"
          },
          {
            id: 18,
            name: "Drama"
          }
        ],
        homepage:
          "https://gamma.app/public/PELISPLUSVer-Sound-of-Freedom-2023-Completa-Online-en-Espanol-Y-L-jmp6lvs393wg891",
        id: 678512,
        imdb_id: "tt7599146",
        original_language: "en",
        original_title: "Sound of Freedom",
        overview:
          "La historia de Tim Ballard, un ex agente del gobierno de EE. UU., que deja su trabajo para dedicar su vida a rescatar a niños de los traficantes sexuales mundiales.",
        popularity: 2051.827,
        poster_path: "/apxaWDCqjPrVc1v5HiKW2r10yiL.jpg",
        production_companies: [
          {
            id: 90508,
            logo_path: "",
            name: "Santa Fe Films",
            origin_country: "US"
          }
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America"
          }
        ],
        release_date: "2023-07-03",
        revenue: 239366545,
        runtime: 131,
        spoken_languages: [
          {
            english_name: "English",
            iso_639_1: "en",
            name: "English"
          },
          {
            english_name: "Spanish",
            iso_639_1: "es",
            name: "Español"
          }
        ],
        status: "Released",
        tagline: "Lucha por la luz. Silencia la oscuridad.",
        title: "Sonido De Libertad",
        video: false,
        vote_average: 8.137,
        vote_count: 1048
      });
    })
}));
// Mock the react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({movieId: 678512})
}));

describe("MovieDetails", () => {
  it("Debe mostrarme los detalles de la pelicula ", async () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>
    );
    // Verifica que me muestre los detalles de las películas.
    await waitFor(() => {
      expect(getAllByText(/Sonido De Libertad/).length).toBe(1);
    });
  });
});
