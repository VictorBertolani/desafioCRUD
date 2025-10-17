import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';

interface IUsuario {
  _id: string;
  nome: string;
  email: string;
  cargo: string;
  dataCriacao: string;
}

const Main = () => {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
  const [mensagem, setMensagem] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [editNome, setEditNome] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editCargo, setEditCargo] = useState('');

  const getUsuarios = async () => {
    try {
      const resposta = await axios.get('http://localhost:3000/Usuario');
      setUsuarios(resposta.data);
    } catch (error) {
      console.log('Erro ao buscar usuários');
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const startEdit = (usuario: IUsuario) => {
    setEditId(usuario._id);
    setEditNome(usuario.nome);
    setEditEmail(usuario.email);
    setEditCargo(usuario.cargo);
  };

  const salvarEdicao = async (id: string) => {
    try {
      await axios.put(`http://localhost:3000/Usuario/${id}`, {
        nome: editNome,
        email: editEmail,
        cargo: editCargo
      });
      setMensagem('Usuário atualizado com sucesso!');
      setEditId(null);

      setTimeout(() => {
        setMensagem('');
        getUsuarios(); 
      }, 2000);
    } catch (error) {
      console.error('Erro ao atualizar usuário');
      setMensagem('Erro ao atualizar usuário!');
    }
  };

  const deletarUsuario = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3000/Usuario/${id}`);
    setMensagem('Usuário excluído com sucesso!');
    
    
    getUsuarios();

   
    setTimeout(() => setMensagem(''), 2000);
  } catch (error) {
    console.error('Erro ao deletar usuário');
    setMensagem('Erro ao excluir usuário!');
    setTimeout(() => setMensagem(''), 2000);
  }
};


  return (
    <div className="container">
      <h1>Usuários Cadastrados</h1>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <table className="usuarios-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td>
                {editId === usuario._id ? (
                  <input
                    type="text"
                    value={editNome}
                    onChange={(e) => setEditNome(e.target.value)}
                  />
                ) : (
                  usuario.nome
                )}
              </td>
              <td>
                {editId === usuario._id ? (
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                ) : (
                  usuario.email
                )}
              </td>
              <td>
                {editId === usuario._id ? (
                  <input
                    type="text"
                    value={editCargo}
                    onChange={(e) => setEditCargo(e.target.value)}
                  />
                ) : (
                  usuario.cargo
                )}
              </td>
              <td>{new Date(usuario.dataCriacao).toLocaleString()}</td>
              <td>
                {editId === usuario._id ? (
                  <button onClick={() => {salvarEdicao(usuario._id);window.location.reload();}}>Salvar</button>
                ) : (
                  <>
                    <button onClick={() => startEdit(usuario)}>Editar</button>
                    <button onClick={() => {
  deletarUsuario(usuario._id);
  window.location.reload();
}}>
  Excluir
</button>

                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
