import Editora from "../modelos/Editora";

const editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
];

class ControleEditora {
    getEditoras(): Editora[] {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.find(e => e.codEditora === codEditora);
        return editora?.nome;
    }
}

export default ControleEditora;
