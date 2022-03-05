import { Router } from "express";

import ingredientController from '../controllers/ingredient';

class IngredientRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', ingredientController.list);
        this.router.post('/', ingredientController.create);
        this.router.put('/:id', ingredientController.update);
        this.router.delete('/:id', ingredientController.delete);
        this.router.get('/:id', ingredientController.get);
    } 
}

const ingredientRoutes = new IngredientRoutes();
export default ingredientRoutes.router;