import { Request, Response } from 'express'

import db from '../database'

class OrderController {


    public async list (req: Request, res: Response){
       const order = await db.query('SELECT * FROM order_customer');
       res.json(order);
    } 

    public async getlast (req: Request, res: Response){
        const order = await db.query('SELECT max(id) as id FROM order_customer');
        res.json(order);
     } 
    public async create (req: Request, res: Response): Promise<void> {
        const order = await db.query('INSERT INTO order_customer set ?', [req.body]);
        res.json(order);
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM order_customer WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE order_customer set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const order = await db.query('SELECT * FROM order_customer WHERE id = ?', [id]);
        console.log(order);
        if (order.length > 0) {
            return res.json(order[0]);
        }
        res.status(404).json({text: 'order does not exist: ' + req.params.id});
    }

    
}

const orderController= new OrderController();
export default orderController;
