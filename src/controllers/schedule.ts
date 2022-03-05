import { Request, Response } from 'express'

import db from '../database'

class ScheduleController {


    public async list (req: Request, res: Response){
       const ing = await db.query('SELECT * FROM SHEDULE');
       res.json(ing);
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO SHEDULE set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM SHEDULE WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE SHEDULE set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const ing = await db.query('SELECT * FROM SHEDULE WHERE id = ?', [id]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
        res.status(404).json({text: 'SHEDULE does not exist: ' + req.params.id});
    }
}

const scheduleController= new ScheduleController();
export default scheduleController;
