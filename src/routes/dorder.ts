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
        this.router.get('/status/:count', detailorderController.countOrders);
        this.router.get('/order/:count', detailorderController.Orders);
        this.router.get('/order/customer/:fdid/:orderid', detailorderController.getlistFood);
        this.router.get('/order/customer/list/pay/:cust', detailorderController.listOrderCustomer);
    } 
}

const detailorderRoutes = new DetailorderRoutes();
export default detailorderRoutes.router;