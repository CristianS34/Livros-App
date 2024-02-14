// LivroDados.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controles/ControleLivro.tsx';
import ControleEditora from './controles/ControleEditora.tsx';

const LivroDados = () => {
    const controleLivro = new ControleLivro(); 
    const controleEditora = new ControleEditora(); 

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        const { value } = event.target;
        setCodEditora(Number(value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n'),
        };

        controleLivro.incluir(livro);

        navigate('/'); 
    };

    return (
        <main className="container">
            <h1 className="display-4">Adicionar Livro</h1>

            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo:</label>
                    <textarea
                        id="resumo"
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores (um por linha):</label>
                    <textarea
                        id="autores"
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="codEditora" className="form-label">Editora:</label>
                    <select id="codEditora" className="form-select" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Incluir Livro</button>
            </form>
        </main>
    );
};

export default LivroDados;
