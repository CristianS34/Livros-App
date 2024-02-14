import React, { useState, useEffect } from 'react';
import ControleLivro from './controles/ControleLivro.tsx'
import LinhaLivro from './LinhaLivro';

function LivroLista() {
    const [livros, setLivros] = useState([]); 
    const [carregado, setCarregado] = useState(false); 

    useEffect(() => {
        const controle = new ControleLivro();
        setLivros(controle.obterLivros());
        setCarregado(true);
    }, []);

    const excluirLivro = (codLivro) => {
        const controle = new ControleLivro();
        controle.excluir(codLivro); 
        setLivros(controle.obterLivros()); 
        setCarregado(false); 
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Excluir</th>
                        <th scope="col">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default LivroLista;