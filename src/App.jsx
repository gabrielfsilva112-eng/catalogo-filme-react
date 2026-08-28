import { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';
import Add from './Add';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('filmes');
    if (dadosSalvos) {
      setFilmes(JSON.parse(dadosSalvos));
    }
  }, []);

  // Salva sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('filmes', JSON.stringify(filmes));
  }, [filmes]);

  function adicionarFilme(filme) {
    setFilmes([...filmes, { ...filme, id: Date.now() }]);
    setMostrarForm(false);
  }

  function removerFilme(id) {
    setFilmes(filmes.filter((f) => f.id !== id));
  }

  return (
    <div className="app">
      <Header onAdicionar={() => setMostrarForm(true)} />
      {mostrarForm && (
        <Add onSalvar={adicionarFilme} onFechar={() => setMostrarForm(false)} />
      )}
      <List filmes={filmes} onRemover={removerFilme} />
    </div>
  );
}

export default App;