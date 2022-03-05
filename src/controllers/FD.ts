import { Request, Response } from 'express'

import db from '../database'

class FDController {


    public async list (req: Request, res: Response): Promise<void>{
       const FD = await db.query('SELECT * FROM FD');
       res.json(FD);
    } 

    public async Tfood (req: Request, res: Response): Promise<void>{
        const { tfood } = req.params;
        const FD = await db.query('SELECT * FROM FD WHERE typ_id LIKE ? ', [tfood]);
        res.json(FD);
     } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO FD set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM FD WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE FD set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const FD = await db.query('SELECT * FROM FD WHERE id = ?', [id]);
        console.log(FD);
        if (FD.length > 0) {
            return res.json(FD[0]);
        }
        res.status(404).json({text: 'type food/drinks does not exist: ' + req.params.id});
    }
}

const fdController= new FDController();
export default fdController;
