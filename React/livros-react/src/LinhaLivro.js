function LinhaLivro({ livro, excluir }) {
    const nomeEditora = 'Nome da Editora'; 
    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>
                <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">
                    Excluir
                </button>
            </td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

export default LinhaLivro;
