import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '@/app/classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } else {
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(500).end('Internal Server Error');
  }
};
