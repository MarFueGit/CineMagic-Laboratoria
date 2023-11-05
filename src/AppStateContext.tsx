import React, { createContext, useState, useContext, ReactNode } from "react";
import { Genre, Movie } from "./types/types";

export interface AppState {
  movies: Movie[];
  page: number;
  gender: number;
  initialYear: string;
  finalYear: string;
  sortBy: string;
  genders: Genre[];
  initialYearInput: number;
  finalYearInput: number;
}

interface AppStateContextType {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error(
      "useAppState debe ser utilizado dentro de un AppStateProvider"
    );
  }
  return context;
};

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children
}) => {
  const [appState, setAppState] = useState<AppState>({
    movies: [],
    page: 1,
    gender: 0,
    initialYear: "1900-01-01",
    finalYear: "2023-12-31",
    sortBy: "popularity.desc",
    genders: [],
    initialYearInput: 1950,
    finalYearInput: 2023
  });

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};
