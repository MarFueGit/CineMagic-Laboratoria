import Sidebar from "../components/Sidebar";
import { render } from "../test/utils";

describe("Sidebar component", () => {
  it("renderizame sidebar Generos", () => {
    const { getByText } = render(<Sidebar />);
    // Verificamos que se renderice el texto Cinemagic
    expect(getByText(/🍿Generos/)).not.toBeUndefined();
  });
});
