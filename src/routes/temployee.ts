import { Router } from "express";

import temployeeController from '../controllers/temployee';

class TEmployeeRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/list/:enterprise', temployeeController.list);
        this.router.post('/', temployeeController.create);
        this.router.put('/:id', temployeeController.update);
        this.router.delete('/:id', temployeeController.delete);
        this.router.get('/:id', temployeeController.get);
    } 
}

const temployeeRoutes = new TEmployeeRoutes();
export default temployeeRoutes.router;