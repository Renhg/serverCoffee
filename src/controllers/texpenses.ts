import { Request, Response } from 'express';

import db from '../database';

class TexpensesController {
    
    public async list (req: Request, res: Response) {
        const tFD = await db.query('SELECT * FROM TEXPENSES ');
        res.json(tFD);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO TEXPENSES set ?', [req.body]);
        res.json({message: 'saved data '});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM TEXPENSES WHERE ID = ?', [id]);
        res.json({text:'deleted data  ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE TEXPENSES set ? WHERE ID = ?', [req.body, id]);
        res.json({message:'The was updated: ' + req.params.id});
    }


    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const tfd = await db.query('SELECT * FROM TEXPENSES WHERE ID = ?', [id]);
        console.log(tfd);
        if (tfd.length > 0) {
            return res.json(tfd[0]);
        }
        res.status(404).json({text: 'data does not exist: ' + req.params.id});
    }

}

export const texpensesController = new TexpensesController();
export default texpensesController;