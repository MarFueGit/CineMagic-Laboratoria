import { render, waitFor } from "@testing-library/react";
import SeccionPrincipal from "../components/SeccionPrincipal"; // Asegúrate de que la ruta del import sea correcta
import { Movie } from "../types/types";
import { BrowserRouter } from "react-router-dom";

// Mock the react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}));
describe("SeccionPrincipal", () => {
  it("debe renderizar una lista de películas", async () => {
    const movies: Movie[] = [
      {
        adult: false,
        backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        genre_ids: [28, 53],
        id: 575264,
        original_language: "en",
        original_title: "Mission: Impossible - Dead Reckoning Part One",
        overview:
          "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
        popularity: 4167.922,
        poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        release_date: "2023-07-08",
        title: "Mission: Impossible - Dead Reckoning Part One",
        video: false,
        vote_average: 7.7,
        vote_count: 1621
      },
      {
        adult: false,
        backdrop_path: "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
        genre_ids: [28, 53, 80, 18],
        id: 926393,
        original_language: "en",
        original_title: "The Equalizer 3",
        overview:
          "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
        popularity: 2755.58,
        poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
        release_date: "2023-08-30",
        title: "The Equalizer 3",
        video: false,
        vote_average: 7.3,
        vote_count: 880
      }
    ];

    const { getAllByText } = render(
      <BrowserRouter>
        <SeccionPrincipal movies={movies} />
      </BrowserRouter>
    );

    // Verifica que se rendericen los títulos de las películas.
    await waitFor(() => {
      expect(
        getAllByText(/Mission: Impossible - Dead Reckoning Part One/).length
      ).toBe(1);
    });
  });
});
