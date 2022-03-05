import { Router } from 'express';

import texpensesController from '../controllers/texpenses'

class TexpensesRoutes{

    public router:Router = Router();

    constructor(){
        
        this.config();

    }

    config(): void {
        this.router.get('/', texpensesController.list );
        this.router.post('/', texpensesController.create);
        this.router.delete('/:id', texpensesController.delete);
        this.router.put('/:id', texpensesController.update);
        this.router.get('/:id' ,  texpensesController.get)
    }

}

const texpensesRoutes = new TexpensesRoutes();
export default texpensesRoutes.router;