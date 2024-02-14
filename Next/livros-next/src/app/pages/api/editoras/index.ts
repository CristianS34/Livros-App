import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '@/app/classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).end('Method Not Allowed');
        }
    } catch (error) {
        res.status(500).end('Internal Server Error');
    }
};
