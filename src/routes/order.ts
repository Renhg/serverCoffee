import { Router } from 'express';

import orderController from '../controllers/order'

class OrderRoutes{

    public router:Router = Router();

    constructor(){
        
        this.config();

    }

    config(): void {
        this.router.get('/', orderController.list );
        this.router.post('/', orderController.create);
        this.router.delete('/:id', orderController.delete);
        this.router.put('/:id', orderController.update);
        this.router.get('/:id' ,  orderController.get)
    }

}

const orderRoutes = new OrderRoutes();
export default orderRoutes.router;