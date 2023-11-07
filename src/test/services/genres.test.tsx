import { getGenres } from "../../services/genres.service";

// Mockea el fetch
global.fetch = jest
  .fn()
  .mockImplementation(() => Promise.reject(new Error("Error")));
  
describe("genres.service.tsx", () => {
  it("genres return error", async () => {
    try {
      await getGenres();
    } catch (error) {
      expect(error).not.toBeUndefined();
    }
  });
});
