import { Request, Response } from 'express'

import db from '../database'

class EmployeeController {


    public async list (req: Request, res: Response){
       const ing = await db.query('SELECT * FROM EMPLOYEE');
       res.json(ing);
    } 

    public async Temployee (req: Request, res: Response): Promise<void>{
        const { temployee } = req.params;
        const FD = await db.query('SELECT *, EMPLOYEE.ID AS EMPLOYEEID FROM EMPLOYEE INNER JOIN USER ON EMPLOYEE.USER = USER.ID WHERE EMPLOYEE.TYPE LIKE ?', [temployee]);
        res.json(FD);
     } 

     public async emailEmploye (req:Request, res:Response) : Promise<any>{
         const { email } = req.params;
         const r = await db.query('SELECT * FROM EMPLOYEE WHERE USER LIKE ?', [email]);
         if (r.length > 0) {
            return res.json(r[0]);
        }
        return res.json([r[0]]);
     }

    public async create (req: Request, res: Response): Promise<void> {
        const add = await db.query('INSERT INTO EMPLOYEE set ?', [req.body]);
        res.json(add);
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM EMPLOYEE WHERE ID = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE EMPLOYEE set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const ing = await db.query('SELECT * FROM EMPLOYEE WHERE id = ?', [id]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
        res.status(404).json({text: 'EMPLOYEE does not exist: ' + req.params.id});
    }

    public async getUser (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { enterprise } = req.params;
        const ing = await db.query('SELECT * FROM EMPLOYEE WHERE USER LIKE ? AND ENTERPRISE LIKE ?', [id, enterprise]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
        res.status(404).json({text: 'EMPLOYEE does not exist: ' + req.params.id});
    }
}

const employeeController= new EmployeeController();
export default employeeController;
