import Button from './Button.jsx';

function Header({ onAdicionar }) {
  return (
    <header className="header">
      <h1>Catálogo de Filmes</h1>
      <Button texto="+" onClick={onAdicionar} />
    </header>
  );
}

export default Header;