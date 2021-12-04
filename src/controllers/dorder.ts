import { Request, Response } from 'express'

import pool from '../database'

class DetailorderController {


    public async list (req: Request, res: Response){
       const detailOrder = await pool.query('SELECT * FROM detail_Order');
       res.json(detailOrder);
    } 

    public async countOrders (req: Request, res: Response): Promise<void>{
        const { count } = req.params;
        const detailOrder = await pool.query('SELECT COUNT(STATUS) AS status from detail_Order WHERE status = ?', [count]);
        res.json(detailOrder);

     } 

     public async getlistFood (req: Request, res: Response): Promise<any>{
        const { fdid } = req.params;
        const { orderid } = req.params;
        const detailOrder = await pool.query('SELECT * FROM detail_Order where fdid = ? and order_id = ?', [fdid, orderid]);
        console.log(detailOrder);
        if (detailOrder.length > 0) {
            return res.json(detailOrder[0]);
        }
        return res.json([detailOrder[0]]);
    
    }


     public async countOrderCustomer (req: Request, res: Response): Promise<void>{
        const{ cust } = req.params;
        const { count } = req.params;
        const detailOrder = await pool.query('SELECT COUNT(*) AS count from detail_Order INNER JOIN order_customer on detail_Order.order_id = ? WHERE detail_Order.fdid = ?', [cust, count]);
        res.json(detailOrder);
     } 


     public async Orders (req: Request, res: Response): Promise<void>{
        const { count } = req.params;
        const detailOrder = await pool.query('SELECT * from detail_Order WHERE status like ?', [count]);
        res.json(detailOrder);
     } 

    public async create (req: Request, res: Response): Promise<void> {
        const detailOrder = await pool.query('INSERT INTO detail_Order set ?', [req.body]);
        res.json(detailOrder);
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
