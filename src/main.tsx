import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MovieDetails from "./components/MovieDetails.tsx";
import { AppStateProvider } from "./AppStateContext.tsx";
import "./index.css";
// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/details/:movieId",
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
