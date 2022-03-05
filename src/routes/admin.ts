import { Router } from "express";

import pemployeeController from '../controllers/admin';

class PemployeeRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', pemployeeController.list);
        this.router.get('/perm',pemployeeController.listPerm);
        this.router.post('/', pemployeeController.create);
        this.router.put('/:id', pemployeeController.update);
        this.router.delete('/:id', pemployeeController.delete);
        this.router.get('/:id', pemployeeController.get);
    } 
}

const pemployeeRoutes = new PemployeeRoutes();
export default pemployeeRoutes.router;