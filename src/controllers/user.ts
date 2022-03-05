import { Request, Response } from 'express'

import db from '../database'

class UserController {


    public async list (req: Request, res: Response){
       const ing = await db.query('SELECT * FROM USER');
       res.json(ing);
    } 

    public async type (req: Request, res: Response): Promise<void>{
        const { type } = req.params;
        const FD = await db.query('SELECT * FROM USER WHERE TYPE LIKE ?', [type]);
        res.json(FD);
     } 

     public async email (req:Request, res:Response) : Promise<any>{
         const { email } = req.params;
         const r = await db.query('SELECT * FROM USER WHERE EMAIL LIKE ?', [email]);
         if (r.length > 0) {
            return res.json(r[0]);
        }
        res.json(r);
     }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO USER set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM USER WHERE ID = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE USER set ? WHERE ID = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const ing = await db.query('SELECT * FROM USER WHERE ID = ?', [id]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
       res.json(ing);
    }
}

const userController= new UserController();
export default userController;
 