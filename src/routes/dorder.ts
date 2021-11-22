import { Router } from "express";

import detailorderController  from '../controllers/dorder';

class DetailorderRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', detailorderController.list);
        this.router.post('/', detailorderController.create);
        this.router.put('/:id', detailorderController.update);
        this.router.delete('/:id', detailorderController.delete);
        this.router.get('/:id', detailorderController.get);
    } 
}

const detailorderRoutes = new DetailorderRoutes();
export default detailorderRoutes.router;