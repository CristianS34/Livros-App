import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '@/app/classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body; // Assuming the request body contains the new book data
      controleLivro.incluir(novoLivro);
      res.status(200).json({ message: 'Livro adicionado com sucesso!' });
    } else {
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(500).end('Internal Server Error');
  }
};
