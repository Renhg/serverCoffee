import { Router } from "express";

import shoppingController from '../controllers/shopping';

class FDRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', shoppingController.list);
        this.router.post('/', shoppingController.create);
        this.router.put('/:id', shoppingController.update);
        this.router.delete('/:id', shoppingController.delete);
        this.router.get('/:id', shoppingController.get);
        this.router.get('/all/date/:first/:last', shoppingController.listDate);
    } 
}

const shoppingRoutes = new FDRoutes();
export default shoppingRoutes.router;