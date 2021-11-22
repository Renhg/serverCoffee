import { Router } from "express";

import ingredientsController from '../controllers/ingredient';

class FDRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', ingredientsController.list);
        this.router.post('/', ingredientsController.create);
        this.router.put('/:id', ingredientsController.update);
        this.router.delete('/:id', ingredientsController.delete);
        this.router.get('/:id', ingredientsController.get);
    } 
}

const ingredientRoutes = new FDRoutes();
export default ingredientRoutes.router;