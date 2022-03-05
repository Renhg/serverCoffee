import { Request, Response } from 'express'
import db from '../database'

class DetailorderController {


    public async list (req: Request, res: Response){
       const detailOrder = await db.query('SELECT * FROM detail_Order');
       res.json(detailOrder);
    } 

    public async countOrders (req: Request, res: Response): Promise<void>{
        const { count } = req.params;
        const detailOrder = await db.query('SELECT COUNT(STATUS) AS status from detail_Order INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.status = ? AND order_customer.confirmed = true ', [count]);
        res.json(detailOrder);
     } 

     public async getlistFood (req: Request, res: Response): Promise<any>{
        const { createdby } = req.params;
        const { item } = req.params;
        const detailOrder = await db.query('SELECT * FROM detail_Order WHERE order_id = 0 and CREATED_BY = ? and fdid = ?', [createdby, item]);
        console.log(detailOrder);
        if (detailOrder.length > 0) {
            return res.json(detailOrder[0]);
        }
        return res.json([detailOrder[0]]);
    }

    public async listDate (req: Request, res: Response): Promise<void>{ 
        const {first} = req.params;
        const {last} = req.params;
        const s = await db.query('SELECT detail_Order.id, detail_Order.amount, order_customer.name_order, order_customer.NIT, detail_Order.idmesa, FD.name, detail_Order.collect from detail_Order INNER JOIN FD on detail_Order.fdid = FD.id INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.created_at BETWEEN ? AND ?', [first, last]);
        res.json(s);
     } 

     public async listOrderCustomer (req: Request, res: Response): Promise<void>{
        const{ cust } = req.params;
        const detailOrder = await db.query('SELECT detail_Order.id, detail_Order.amount, detail_Order.CREATED_BY, order_customer.name_order, order_customer.NIT, detail_Order.idmesa, FD.name, detail_Order.collect from detail_Order INNER JOIN FD on detail_Order.fdid = FD.id INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.order_id = ?', [cust]);
        res.json(detailOrder);
     } 

     public async listOrder (req: Request, res: Response): Promise<void>{
        const { createdby } = req.params;
        const detailOrder = await db.query('SELECT detail_Order.id, detail_Order.amount, detail_Order.CREATED_BY, detail_Order.idmesa, FD.name, detail_Order.collect from detail_Order INNER JOIN FD on detail_Order.fdid = FD.id WHERE detail_Order.order_id = 0 and detail_Order.CREATED_BY = ?', [ createdby]);
        res.json(detailOrder);
     }  
     
     public async customerAwait (req: Request, res: Response){
        const { createdby } = req.params;
        //const {enterprise} = req.params;
        const detailOrder = await db.query('SELECT detail_Order.order_id FROM detail_Order INNER JOIN order_customer on detail_Order.order_id=order_customer.id WHERE detail_Order.status = FALSE AND detail_Order.CREATED_BY = ? GROUP BY detail_Order.order_id', [ createdby]);
        res.json(detailOrder);
     } 

     public async totalPay (req: Request, res: Response): Promise<any>{
         const{ cust } = req.params;
         const{ createdby } = req.params;
         const detailOrder = await db.query('SELECT SUM(detail_Order.collect) AS total FROM detail_Order WHERE order_id = ? AND CREATED_BY = ?', [cust,createdby]);
         if (detailOrder.length > 0) {
            return res.json(detailOrder[0]);
        }
        return res.json(detailOrder[0]);
     }

     public async Orders (req: Request, res: Response): Promise<void>{
        const { count } = req.params;
        const detailOrder = await db.query('SELECT * from detail_Order WHERE status like ?', [count]);
        res.json(detailOrder);
     } 

    public async create (req: Request, res: Response): Promise<void> {
        const detailOrder = await db.query('INSERT INTO detail_Order set ?', [req.body]);
        res.json(detailOrder);
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM detail_Order WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }
 
    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE detail_Order set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async updatecustomer(req: Request, res: Response): Promise<void>{
        
        const { createdby } = req.params
        await db.query('UPDATE detail_Order set ? WHERE order_id = 0 and CREATED_BY = ?', [req.body, createdby]);
        res.json({message:'The was updated date id:'});
    }

    public async updatestatus (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE detail_Order set ? WHERE detail_Order.order_id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }


    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const detailOrder = await db.query('SELECT * FROM detail_Order WHERE id = ?', [id]);
        console.log(detailOrder);
        if (detailOrder.length > 0) {
            return res.json(detailOrder[0]);
        }
        res.status(404).json({text: 'detail does not exist: ' + req.params.id});
    }
}

const detailorderController= new DetailorderController();
export default detailorderController;
