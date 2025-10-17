// src/components/Navbar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      
      
      {location.pathname === '/' ? (
        <Link to="/CadastrarUsuarios" className="nav-button">
          Cadastrar Usuário
        </Link>
      ) : (
        <button className="nav-button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      )}
    </nav>
  );
};

export default Navbar;
