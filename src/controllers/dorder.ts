import { Request, Response } from 'express'

import pool from '../database'

class DetailorderController {


    public async list (req: Request, res: Response){
       const detailOrder = await pool.query('SELECT * FROM detail_Order');
       res.json(detailOrder);
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO detail_Order set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM detail_Order WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }
 
    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE detail_Order set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const detailOrder = await pool.query('SELECT * FROM detail_Order WHERE id = ?', [id]);
        console.log(detailOrder);
        if (detailOrder.length > 0) {
            return res.json(detailOrder[0]);
        }
        res.status(404).json({text: 'detail does not exist: ' + req.params.id});
    }
}

const detailorderController= new DetailorderController();
export default detailorderController;
