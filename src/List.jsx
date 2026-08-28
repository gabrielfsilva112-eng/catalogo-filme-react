import Card from './Card.jsx';

function List({ filmes, onRemover }) {
  return (
    <div className="list">
      {filmes.length === 0 && <p>Nenhum filme cadastrado ainda.</p>}
      {filmes.map((filme) => (
        <Card key={filme.id} filme={filme} onRemover={onRemover} />
      ))}
    </div>
  );
}

export default List;