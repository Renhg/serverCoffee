import { Request, Response } from 'express'

import db from '../database'

class MesaController {


    public async list (req: Request, res: Response){
       const MESA = await db.query('SELECT * FROM MESA');
       res.json(MESA);
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO MESA set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM MESA WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE MESA set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const MESA = await db.query('SELECT * FROM MESA WHERE id = ?', [id]);
        console.log(MESA);
        if (MESA.length > 0) {
            return res.json(MESA[0]);
        }
        res.status(404).json({text: 'MESA does not exist: ' + req.params.id});
    }
}

const mesaController= new MesaController();
export default mesaController;
