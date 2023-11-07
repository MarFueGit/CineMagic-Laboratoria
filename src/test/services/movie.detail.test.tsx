import { getMovieDetails } from "../../services/movie.detail.service";

// Mockea el fetch
global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({ id: 1, name: 'El origen' })
  }));

describe('movie.detail.tsx', () => {
    it('movie detail return succes ', async () => {
       const response =  await getMovieDetails(4) 
       expect(response).not.toBeUndefined()
    });

});