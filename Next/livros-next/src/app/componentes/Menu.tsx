
import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Meu App</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista">
                <a className="nav-link">Lista de Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <a className="nav-link">Dados do Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
