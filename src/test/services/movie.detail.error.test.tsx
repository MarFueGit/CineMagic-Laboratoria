import { getMovieDetails } from "../../services/movie.detail.service";

// Mockea el fetch
global.fetch = jest
  .fn()
  .mockImplementation(() => Promise.reject(new Error("Error")));

describe('movie.detail.tsx',() => {
    it('movie detail retorna un error ',  async() => {
        try {
            await getMovieDetails(2)
        } catch (error) {
          expect(error).not.toBeUndefined();
        }
    });
});