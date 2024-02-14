
type Livro = {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
  };
  
  class ControleLivro {
    private livros: Livro[] = [];
  
    obterLivros(): Livro[] {
      return this.livros;
    }
  
    incluir(novoLivro: Livro): void {
      this.livros.push(novoLivro);
    }
  
    excluir(codigo: number): void {
      this.livros = this.livros.filter(livro => livro.codigo !== codigo);
    }
  }
  
  export default ControleLivro;
  