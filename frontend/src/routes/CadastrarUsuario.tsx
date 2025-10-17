import React, { useState } from 'react';
import axios from 'axios';
import './CadastrarUsuario.css';

const CadastrarUsuario = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [mensagem, setMensagem] = useState(''); 

  const envioDados = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const usuario = { nome, email, cargo, dataCriacao: new Date().toISOString() };

    try {
      const resposta = await axios.post('http://localhost:3000/Usuario', usuario);
      setMensagem(resposta.data.message); 

      setNome('');
      setEmail('');
      setCargo('');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setMensagem('Erro ao criar usuário!');
    }
  };

  return (
    <div className='container'>
      <h1>Cadastre um usuário</h1>
      
      <form onSubmit={envioDados}>
        <div>
          <label htmlFor='nome'>Nome:</label>
          <input type='text' id='nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite o Nome...' required />
        </div>
        
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite o Email...' required />
        </div>
        
        <div>
          <label htmlFor='cargo'>Cargo:</label>
          <input type='text' id='cargo' value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder='Digite o Cargo...' required />
        </div>

        <button type='submit' className='enviaInfos'>Salvar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CadastrarUsuario;
