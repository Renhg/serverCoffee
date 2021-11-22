import { Router } from "express";

import mesaController from '../controllers/mesa';

class MesaRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', mesaController.list);
        this.router.post('/', mesaController.create);
        this.router.put('/:id', mesaController.update);
        this.router.delete('/:id', mesaController.delete);
        this.router.get('/:id', mesaController.get);
    } 
}

const mesaRoutes = new MesaRoutes();
export default mesaRoutes.router;