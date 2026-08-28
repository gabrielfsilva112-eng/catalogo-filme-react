import Button from './Button.jsx';

function Card({ filme, onRemover }) {
  return (
    <div className="filme-card">
      <h3>{filme.titulo}</h3>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <p><strong>Diretor:</strong> {filme.diretor}</p>
      <p><strong>Nota:</strong> {filme.nota}</p>
      <Button texto="Remover" onClick={() => onRemover(filme.id)} />
    </div>
  );
}

export default Card;