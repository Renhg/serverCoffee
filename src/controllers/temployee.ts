import { Request, Response } from 'express';

import db from '../database';

class TemployeeController {
    
    public async list (req: Request, res: Response):Promise<void> {
        const {enterprise} = req.params;
        const tFD = await db.query('SELECT *, TEMPLOYEE.ID AS TEMPLOYEEID FROM  TEMPLOYEE INNER JOIN EMPLOYEE ON TEMPLOYEE.CREATED_BY = EMPLOYEE.ID WHERE EMPLOYEE.ENTERPRISE = ?', [enterprise]);
        res.json(tFD);
    }

    public async listPerm (req: Request, res: Response) {
        const tFD = await db.query('SELECT * FROM  ADMIN');
        res.json(tFD);
    }


    public async create (req: Request, res: Response): Promise<void> {
        const add = await db.query('INSERT INTO TEMPLOYEE set ?', [req.body]);
        res.json(add);
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM TEMPLOYEE WHERE ID = ?', [id]);
        res.json({text:'deleted data  ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE TEMPLOYEE set ? WHERE ID = ?', [req.body, id]);
        res.json({message:'The was updated: ' + req.params.id});
    }


    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const tfd = await db.query('SELECT * FROM TEMPLOYEE WHERE ID = ?', [id]);
        console.log(tfd);
        if (tfd.length > 0) {
            return res.json(tfd[0]);
        }
        res.status(404).json({text: 'data does not exist: ' + req.params.id});
    }

}

export const temployeeController = new TemployeeController();
export default temployeeController;