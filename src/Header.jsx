function Header({ onAdicionar }) {
  return (
    <header className="header">
      <h1>Catálogo de Filmes</h1>
      <button onClick={onAdicionar}>+</button>
    </header>
  );
}

export default Header;