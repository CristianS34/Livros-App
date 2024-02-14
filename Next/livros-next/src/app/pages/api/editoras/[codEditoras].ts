import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '@/app/classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({ nomeEditora });
        } else {
            res.status(405).end('Method Not Allowed');
        }
    } catch (error) {
        res.status(500).end('Internal Server Error');
    }
};
