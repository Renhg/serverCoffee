import { Router } from "express";

import fdController from '../controllers/FD';

class FDRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', fdController.list);
        this.router.post('/', fdController.create);
        this.router.put('/:id', fdController.update);
        this.router.delete('/:id', fdController.delete);
        this.router.get('/:id', fdController.get);
        this.router.get('/tfood/:tfood', fdController.Tfood);
    } 
}

const fdRoutes = new FDRoutes();
export default fdRoutes.router;