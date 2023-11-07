import { getMovies } from "../../services/movies.service";

// Mockea el fetch
global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({results: [{ id: 1, name: 'El origen' }]})
  }));

describe('movies.service.tsx', () => {
    it('movies service retorna succes ', async() => {
        const response = await getMovies(1, 1, "2020-12-01", "2023-10-06", "popularity.asc")
        expect(response).not.toBeUndefined()
    });

    it('movies service retorna succes with genre 0', async() => {
        const response = await getMovies(1, 0, "2020-12-01", "2023-10-06", "popularity.asc")
        expect(response).not.toBeUndefined()
    });
});