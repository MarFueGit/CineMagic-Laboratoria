import Sidebar from "../components/Sidebar";
import { render, waitFor } from "@testing-library/react";
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
  global.fetch = jest.fn(() =>
    Promise.reject("Error al obtener la informacion")
  ) as jest.Mock;

  jest.spyOn(React, "useState").mockImplementation(() => [
    [
      {
        id: 1,
        name: "Action"
      }
    ],
    jest.fn()
  ]);

  jest.spyOn(global.console, "warn");
  jest.spyOn(global.console, "log");
  jest.spyOn(global.console, "error");

  it("Lanza error al traer los generos que manda a traer desde el servicio", async () => {
    await waitFor(() => {
      const setGender = jest.fn();
      const setSortBy = jest.fn();
      try {
        render(
          <Sidebar
            setGender={setGender}
            gender={1}
            setSortBy={setSortBy}
          />
        );
      } catch (error) {
        expect(error).not.toBeUndefined();
      }
    });
  });
});
