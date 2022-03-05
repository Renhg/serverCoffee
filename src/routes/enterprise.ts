import { Router } from "express";

import enterpriseController from '../controllers/enterprise';

class EnterpriseRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', enterpriseController.list);
        this.router.post('/', enterpriseController.create);
        this.router.put('/:id', enterpriseController.update);
        this.router.delete('/:id', enterpriseController.delete);
        this.router.get('/:id', enterpriseController.get);
        this.router.get('/email/:email', enterpriseController.email);
        this.router.get('/user/:user', enterpriseController.listUser);
    } 
}

const enterpriseRoutes = new EnterpriseRoutes();
export default enterpriseRoutes.router;