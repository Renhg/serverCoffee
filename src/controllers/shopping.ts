import { Request, Response } from 'express'

import db from '../database'

class ShoppingController {


    public async list (req: Request, res: Response){
       const s = await db.query('SELECT shopping.id, shopping.name, shopping.cost, shopping.stock, shopping.note, TEXPENSES.NAME as tname, shopping.created_at FROM shopping INNER JOIN TEXPENSES ON shopping.texp=TEXPENSES.ID');
       res.json(s);
    } 

    public async listDate (req: Request, res: Response): Promise<void>{ 
        const {first} = req.params;
        const {last} = req.params;
        const {enterprise} = req.params;
        const s = await db.query('SELECT shopping.id, shopping.name, shopping.cost, shopping.stock, shopping.note, TEXPENSES.NAME as tname, shopping.created_at FROM shopping INNER JOIN TEXPENSES ON shopping.texp=TEXPENSES.ID WHERE shopping.created_at BETWEEN ? AND ? AND shopping.ENTERPRISE = ?', [first, last, enterprise]);
        res.json(s);
     } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO shopping set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM shopping WHERE id = ?', [id]);
        res.json({text:'deleted data ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE shopping set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const s = await db.query('SELECT * FROM shopping WHERE id = ?', [id]);
        console.log(s);
        if (s.length > 0) {
            return res.json(s[0]);
        }
        res.status(404).json({text: 'shopp does no exist: ' + req.params.id});
    }
}

const shoppingController= new ShoppingController();
export default shoppingController;
