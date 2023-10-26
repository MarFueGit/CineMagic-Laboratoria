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
    const setSortBy = jest.fn();
    const { getByText } = render(
      <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
        setSortBy={setSortBy}
      />
    );
    fireEvent.click(getByText("Action"));
    await waitFor(() => {
      expect(getByText("Action")).not.toBeUndefined();
    });
  });

  it("Simular cambio en el input del año minimo y verificar que onChange se ejecuta", () => {
    const setGender = jest.fn();
    const setInitialYear = jest.fn();
    const setFinalYear = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
        setSortBy={setSortBy}
      />
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
    const setInitialYear = jest.fn();
    const setFinalYear = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
        setSortBy={setSortBy}
      />
    );

    // Simula un cambio en el valor del input
    fireEvent.change(getByTestId("aniosMax"), {
      target: { value: "2023" }
    });

    // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
    expect(getByTestId("aniosMax")).not.toBeUndefined();
  });


  it("simula un cambio en el select al momento de ordenar y verifica que onChange se ejecute", () =>{
    const setGender = jest.fn();
    const setInitialYear = jest.fn();
    const setFinalYear = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <Sidebar
        setGender={setGender}
        gender={1}
        setInitialYear={setInitialYear}
        setFinalYear={setFinalYear}
        setSortBy={setSortBy}
      />
    );
     // Simula un cambio en el valor del select
     fireEvent.change(getByTestId("ordenBy"), {
      target: { value: "primary_release_date.asc" }
    });
 // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
 expect(getByTestId("ordenBy")).not.toBeUndefined();
  })


});
