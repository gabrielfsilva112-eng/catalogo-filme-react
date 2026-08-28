function List({ filmes, onRemover }) {
  return (
    <div className="list">
      {filmes.length === 0 && <p>Nenhum filme cadastrado ainda.</p>}
      {filmes.map((filme) => (
        <div key={filme.id} className="filme-card">
          <h3>{filme.titulo}</h3>
          <p>Gênero: {filme.genero}</p>
          <p>Ano: {filme.ano}</p>
          <p>Diretor: {filme.diretor}</p>
          <p>Nota: {filme.nota}</p>
          <button onClick={() => onRemover(filme.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default List;