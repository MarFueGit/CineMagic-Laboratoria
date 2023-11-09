import "./Header.css"; // Importamos el css

// La funcion Header contiene nuestro component header
export default function Header() {
// Nuestro component header retorna un header, un h1 y un h2.
  return (
    <header>
      <h1 className="logoTitle">🎬 CineMary 🎬</h1>
      <h2>Peliculas Populares</h2>
    </header>
  );
}
