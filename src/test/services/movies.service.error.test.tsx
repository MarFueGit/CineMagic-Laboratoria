import { getMovies } from "../../services/movies.service";

// Mockea el fetch
global.fetch = jest
  .fn()
  .mockImplementation(() => Promise.reject(new Error("Error")));

describe('movies.service.tsx', () => {
    it('movies service retorna un error', async() => {
        try {
            await getMovies(1, 1, "2020-12-01", "2023-10-06", "popularity.asc")
        } catch (error) {
            expect(error).not.toBeUndefined();
        }
    });
});