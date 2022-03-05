import { Router } from "express";

import scheduleController from '../controllers/schedule';

class ScheduleRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', scheduleController.list);
        this.router.post('/', scheduleController.create);
        this.router.put('/:id', scheduleController.update);
        this.router.delete('/:id', scheduleController.delete);
        this.router.get('/:id', scheduleController.get);
    } 
}

const scheduleRoutes = new ScheduleRoutes();
export default scheduleRoutes.router;