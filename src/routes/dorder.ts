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
        this.router.put('/customer/add/:createdby',detailorderController.updatecustomer);
        this.router.put('/order/done/:id', detailorderController.updatestatus);
        this.router.delete('/:id', detailorderController.delete);
        this.router.get('/:id', detailorderController.get);
        this.router.get('/status/:count', detailorderController.countOrders);
        this.router.get('/order/:count', detailorderController.Orders);
        this.router.get('/order/customer/:createdby/:item', detailorderController.getlistFood);
        this.router.get('/order/customer/list/pay/:cust', detailorderController.listOrderCustomer);
        this.router.get('/order/list/:createdby', detailorderController.listOrder);
        this.router.get('/list/await/:createdby', detailorderController.customerAwait);
        
        this.router.get('/pay/total/:cust/:createdby', detailorderController.totalPay);
        this.router.get('/list/sales/:first/:last', detailorderController.listDate);
          
    } 
}

const detailorderRoutes = new DetailorderRoutes();
export default detailorderRoutes.router;