import { Router } from "express";

import employeeController from '../controllers/employee';

class EmployeeRoutes {

    public router: Router = Router();
    
    constructor(){

        this.config();
        
    }

    config(): void {
        this.router.get('/', employeeController.list);
        this.router.post('/', employeeController.create);
        this.router.put('/:id', employeeController.update);
        this.router.delete('/:id', employeeController.delete);
        this.router.get('/:id', employeeController.get);
        this.router.get('/type/:temployee', employeeController.Temployee);
        this.router.get('/email/:email', employeeController.emailEmploye);
        this.router.get('/user/data/:id/:enterprise', employeeController.getUser);
    } 
}

const employeeRoutes = new EmployeeRoutes();
export default employeeRoutes.router;