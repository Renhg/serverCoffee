import { Request, Response } from 'express'

import db from '../database'

class IngredientsController {


    public async list (req: Request, res: Response){
       const ing = await db.query('SELECT * FROM ingredient');
       res.json(ing);
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO ingredient set ?', [req.body]);
        res.json({message: 'saved data'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM ingredient WHERE id = ?', [id]);
        res.json({text:'deleted data' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE ingredient set ? WHERE id = ?', [req.body, id]);
        res.json({message:'The was updated date id:'});
    }

    public async get (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const ing = await db.query('SELECT * FROM ingredient WHERE id = ?', [id]);
        console.log(ing);
        if (ing.length > 0) {
            return res.json(ing[0]);
        }
        res.status(404).json({text: 'ingredient does not exist: ' + req.params.id});
    }
}

const ingredientsController= new IngredientsController();
export default ingredientsController;
