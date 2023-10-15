import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar-generos">
      <h3 className="sidebar-title">🍿Generos</h3>
      <div className="contenedor-generos" id="filtroGeneros">
        <button className="btn">Acción</button>
        <button className="btn">Aventura</button>
        <button className="btn">Animación</button>
        <button className="btn">Comedia</button>
        <button className="btn">Crimén</button>
        <button className="btn">Drama</button>
        <button className="btn">Fantasia</button>
        <button className="btn">Terror</button>
        <button className="btn">Misterio</button>
        <button className="btn">Romances</button>
        <button className="btn">Suspenso</button>
        <button className="btn">Familia</button>
      </div>
      <h3 className="sidebar-año">Años</h3>
      <div className="container-inputs">
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="1900"
        />
        <span>-</span>
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="2023"
        />
      </div>
      <div className="sidebar-buscar" id="btn-buscar">
        <button className="btn btn--100 btn--amarillo">Buscar</button>
      </div>
    </div>
  );
}
