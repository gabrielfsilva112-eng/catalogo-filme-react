import { useState } from 'react';

function Add({ onSalvar, onFechar }) {
  const [form, setForm] = useState({
    titulo: '',
    genero: '',
    ano: '',
    diretor: '',
    nota: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSalvar(form);
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Cadastrar Filme</h2>
        <input name="titulo" placeholder="Título" onChange={handleChange} required />
        <input name="genero" placeholder="Gênero" onChange={handleChange} required />
        <input name="ano" placeholder="Ano" type="number" onChange={handleChange} required />
        <input name="diretor" placeholder="Diretor" onChange={handleChange} required />
        <input name="nota" placeholder="Nota" type="number" step="0.1" onChange={handleChange} required />
        <div className="botoes">
          <button type="submit">Salvar</button>
          <button type="button" onClick={onFechar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Add;