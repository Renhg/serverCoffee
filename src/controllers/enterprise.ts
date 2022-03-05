import { Request, Response } from 'express'

import db from '../database'

class EnterpriseController {


    public async list (req: Request, res: Response){
       const ing = await db.query('SELECT * FROM ENTERPRISE');
       res.json(ing);
    } 

    public async listUser (req: Request, res: Response): Promise<void>{
        const {user} = req.params;
        const ing = await db.query('SELECT *,ENTERPRISE.ID AS ENTERPRISEID, ENTERPRISE.NAME AS ENTERPRISENAME FROM ENTERPRISE INNER JOIN EMPLOYEE ON ENTERPRISE.ID = EMPLOYEE.ENTERPRISE WHERE EMPLOYEE.USER LIKE ?', [user]);
        res.json(ing);
     } 
 
    public async type (req: Request, res: Response): Promise<void>{
        const { type } = req.params;
        const FD = await db.query('SELECT * FROM ENTERPRISE WHERE TYPE LIKE ?', [type]);
        res.json(FD);
     } 

     public async email (req:Request, res:Response) : Promise<any>{
         const { email } = req.params;
         const r = await db.query('SELECT * FROM ENTERPRISE WHERE EMAIL LIKE ?', [email]);
         if (r.length > 0) {
            return res.json(r[0]);
        }
        res.json(r);
     }

    public async create (req: Request, res: Response): Promise<void> {
        const add = await db.query('INSERT INTO ENTERPRISE set ?', [req.body]);
        res.json(add);
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM ENTERPRISE WHERE ID = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE ENTERPRISE set ? WHERE ID = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const ing = await db.query('SELECT * FROM ENTERPRISE WHERE ID = ?', [id]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
       res.json(ing);
    }
}

const enterpriseController= new EnterpriseController();
export default enterpriseController;
 