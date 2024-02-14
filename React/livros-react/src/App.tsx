
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importe os componentes do react-router-dom
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Altere a classe para navbar-dark e bg-dark */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                               Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dados" className="nav-link">
                                Editar Livro
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;