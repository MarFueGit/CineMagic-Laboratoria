import Sidebar from "../components/Sidebar";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";

describe("Sidebar Component", () => {
  // mock de el servicio
  jest.mock("../services/genres.service.ts", () => ({
    getGenres: () =>
      new Promise((resolve) => {
        return resolve([
          {
            id: 1,
            name: "Action"
          }
        ]);
      })
  }));

  // mock del fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "Action"
          }
        ])
    })
  ) as jest.Mock;

  // mock de los hooks
  jest.spyOn(React, "useState").mockImplementation(() => [
    [
      {
        id: 1,
        name: "Action"
      },
      {
        id: 2,
        name: "Comedy"
      }
    ],
    jest.fn()
  ]);

  jest.spyOn(global.console, "warn");
  jest.spyOn(global.console, "log");
  jest.spyOn(global.console, "error");

  it("Renderiza los generos que manda a traer desde el servicio", async () => {
    const setGender = jest.fn();
    const setInitialYear = jest.fn();
    const setFinalYear = jest.fn();
    const { getByText } = render(
      <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
      />
    );
    await waitFor(() => {
      expect(getByText("Action")).not.toBeUndefined();
    });

    test('Simular cambio en el input y verificar que onChange se ejecuta', () => {
      render( <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
      />
    
      // Simula un cambio en el valor del input
      fireEvent.change(inputElement, { target: { value: '2023-10-23' } })
    
      // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
      expect(screen.getByText('Initial Year: 2023-10-23')).toBeInTheDocument()
    });
  });
});
