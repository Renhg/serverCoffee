import { Request, Response } from 'express';

import db from '../database';

class TypeFDController {
    
    public async list (req: Request, res: Response) {
        const tFD = await db.query('SELECT * FROM type_FD');
        res.json(tFD);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO type_FD set ?', [req.body]);
        res.json({message: 'saved data '});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM type_FD WHERE id = ?', [id]);
        res.json({text:'deleted data  ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE type_FD set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated: ' + req.params.id});
    }


    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const tfd = await db.query('SELECT * FROM type_FD WHERE id = ?', [id]);
        console.log(tfd);
        if (tfd.length > 0) {
            return res.json(tfd[0]);
        }
        res.status(404).json({text: 'data does not exist: ' + req.params.id});
    }

}

export const typeFDController = new TypeFDController();
export default typeFDController;