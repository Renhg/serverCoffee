import { Request, Response } from 'express';

import db from '../database';

class PemployeeController {
    
    public async list (req: Request, res: Response) {
        const tFD = await db.query('SELECT * FROM  PEMPLOYEE');
        res.json(tFD);
    }

    public async listPerm (req: Request, res: Response) {
        const tFD = await db.query('SELECT * FROM  ADMIN');
        res.json(tFD);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO PEMPLOYEE set ?', [req.body]);
        res.json({message: 'saved data '});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM PEMPLOYEE WHERE TEMPLOYEE = ?', [id]);
        res.json({text:'deleted data  ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE PEMPLOYEE set ? WHERE TEMPLOYEE = ?', [req.body, id]);
        res.json({message:'The was updated: ' + req.params.id});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const tfd = await db.query('SELECT * FROM PEMPLOYEE WHERE TEMPLOYEE = ?', [id]);
        console.log(tfd);
        if (tfd.length > 0) {
            return res.json(tfd[0]);
        }
        res.status(404).json({text: 'data does not exist: ' + req.params.id});
    }

}

export const pemployeeController = new PemployeeController();
export default pemployeeController;