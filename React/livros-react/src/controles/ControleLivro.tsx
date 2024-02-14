import Livro from "../modelos/Livros";

const livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Código limpo', resumo: 'Mesmo um código ruim pode funcionar', autores: ['Robert C. Martin'] },
    { codigo: 2, codEditora: 2, titulo: 'Entendendo Algoritmos', resumo: 'Um guia ilustrado para programadores e outros curiosos.', autores: ['Aditya Y. Bhargava'] },
    { codigo: 3, codEditora: 3, titulo: 'Introdução à Linguagem SQL', resumo: 'O autor Thomas Nield fornece exercícios no decorrer de todo o livro para ajudá-lo a praticar em casa suas recém descobertas aptidões no uso do SQL', autores: ['Thomas Nield'] }
];

class ControleLivro {
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = livros.reduce((maxCod, livro) => Math.max(maxCod, livro.codigo), 0) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codLivro: number): void {
        const index = livros.findIndex(livro => livro.codigo === codLivro);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;
