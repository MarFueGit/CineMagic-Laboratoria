import { render, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  it('debe mostrar los botones de "Anterior" y "Siguiente"', () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination setPage={setPage} page={1} />);

    // Verifica que los botones "Anterior" y "Siguiente" estén presentes en el componente.
    expect(getByText("Anterior")).toBeDefined();
    expect(getByText("Siguiente")).toBeDefined();
  });

  it('debe llamar a la función setPage con el número correcto al hacer clic en "Anterior"', () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination setPage={setPage} page={2} />);

    // Simula hacer clic en el botón "Anterior".
    fireEvent.click(getByText("Anterior"));

    // Verifica que la función setPage se llamó con el número correcto.
    expect(setPage).toHaveBeenCalledWith(1);
  });

  it('debe llamar a la función setPage con el número correcto al hacer clic en "Siguiente"', () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination setPage={setPage} page={3} />);

    // Simula hacer clic en el botón "Siguiente".
    fireEvent.click(getByText("Siguiente"));

    // Verifica que la función setPage se llamó con el número correcto.
    expect(setPage).toHaveBeenCalledWith(4);
  });

  it("renderiza paginacion con page 0", () => {
    const setPage = jest.fn();
    const { getByText } = render(<Pagination setPage={setPage} page={-1} />);
    // Simula hacer clic en el botón "Siguiente".
    fireEvent.click(getByText("Siguiente"));

    // Verifica que la función setPage se llamó con el número correcto.
    expect(setPage).toHaveBeenCalledWith(0);
  });
});
