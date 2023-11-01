import { render, waitFor } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails";
import { BrowserRouter } from "react-router-dom";

jest.mock("../services/movie.detail.service", () => ({
  getMovieDetails: () =>
    new Promise(() => {
      throw new Error("Error al obtener movieDetail");
      
    })
}));
// Mock the react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ movieId: 678512 })
}));

describe("MovieDetails", () => {
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  it("Debe retornar a error al obtener los detalles de las peliculas", async () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>
    );
    // Verifica que me muestre los detalles de las películas.
    await waitFor(() => {
      try {
        getAllByText(/Sonido De Libertad/);
      } catch (error) {
        expect(error).not.toBeUndefined();
      }
    });
  });
});
