import "./Header.css";

export default function Header() {

  return (
    <header>
      <h1 className="logoTitle">🎬 CineMagic</h1>
      <h2>Peliculas</h2>
      <button className="login">Inicio de sesion</button>
      <button className="signOut">Cerrar sesion</button>
    </header>
  );
}
