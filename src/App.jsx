import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Add from './Add.jsx';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('filmes');
    if (dadosSalvos) {
      setFilmes(JSON.parse(dadosSalvos));
    }
  }, []);

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