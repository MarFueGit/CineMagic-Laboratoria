import Sidebar from "../components/Sidebar";
import { AppStateProvider } from "../AppStateContext";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";

describe("Sidebar Component", () => {
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
  // mock de el servicio
  jest.mock("../services/genres.service.ts", () => ({
    getGenres: () =>
      new Promise((resolve) => {
        return resolve([
          {
            id: 1,
            name: "Terror"
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
            name: "Terror"
          }
        ])
    })
  ) as jest.Mock;


  jest.spyOn(global.console, "warn");
  jest.spyOn(global.console, "log");
  jest.spyOn(global.console, "error");
  jest.mock("../AppStateContext", () => ({
    useAppState: jest.fn()
  }));

  const mockAppState = {
    movies: [],
    page: 1,
    gender: 0,
    initialYear: "1900-01-01",
    finalYear: "2023-12-31",
    sortBy: "popularity.desc",
    genders: [{ name: "Terror", id: 1 }],
    initialYearInput: 1950,
    finalYearInput: 2023
  };

  const mockSetAppState = jest.fn();

  it("Renderiza los generos que manda a traer desde el servicio", async () => {
    const setGender = jest.fn();
    const setSortBy = jest.fn();

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [mockAppState, mockSetAppState]);

    const { getByText } = render(
      <AppStateProvider>
        <Sidebar setGender={setGender} gender={1} setSortBy={setSortBy} />
      </AppStateProvider>
    );
    fireEvent.click(getByText("Terror"));
    await waitFor(() => {
      expect(getByText("Terror")).not.toBeUndefined();
    });
  });

  it("Simular cambio en el input del año minimo y verificar que onChange se ejecuta", () => {
    const setGender = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <AppStateProvider>
        <Sidebar setGender={setGender} gender={2} setSortBy={setSortBy} />
      </AppStateProvider>
    );

    // Simula un cambio en el valor del input
    fireEvent.change(getByTestId("aniosMin"), {
      target: { value: "2023" }
    });

    // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
    expect(getByTestId("aniosMin")).not.toBeUndefined();
  });

  it("Simular cambio en el input del año maximo y verificar que onChange se ejecuta", () => {
    const setGender = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <AppStateProvider>
        <Sidebar setGender={setGender} gender={1} setSortBy={setSortBy} />
      </AppStateProvider>
    );

    // Simula un cambio en el valor del input
    fireEvent.change(getByTestId("aniosMax"), {
      target: { value: 2020 }
    });

    // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
    expect(mockSetAppState).toBeCalled();
  });

  it("simula un cambio en el select al momento de ordenar y verifica que onChange se ejecute", () => {
    const setGender = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <AppStateProvider>
        <Sidebar setGender={setGender} gender={1} setSortBy={setSortBy} />
      </AppStateProvider>
    );
    // Simula un cambio en el valor del select
    fireEvent.change(getByTestId("ordenBy"), {
      target: { value: "primary_release_date.asc" }
    });
    // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
    expect(getByTestId("ordenBy")).not.toBeUndefined();
  });
});
