import { Router } from "express";

import userController from '../controllers/user';

class UserRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', userController.list);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.update);
        this.router.delete('/:id', userController.delete);
        this.router.get('/:id', userController.get);

        this.router.get('/email/:email', userController.email);
    } 
}

const userRoutes = new UserRoutes();
export default userRoutes.router;