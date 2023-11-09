import React from "react";
import ReactDOM from "react-dom/client"; //Para crear un nodo de react
import App from "./App.tsx";
import MovieDetails from "./components/MovieDetails.tsx";
import { AppStateProvider } from "./AppStateContext.tsx"; // Componente de estado global
import "./index.css";
// Lo utilizamos para crear rutas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Ruta al home
    element: <App />
  },
  {
    path: "/details/:movieId",// Ruta a details con la variable movieId
    element: <MovieDetails />
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStateProvider> 
      <RouterProvider router={router} />
    </AppStateProvider>
  </React.StrictMode>
);
