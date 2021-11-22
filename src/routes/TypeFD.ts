import { Router } from 'express';

import typeFDController from '../controllers/TypeFD'

class TypeFDRoutes{

    public router:Router = Router();

    constructor(){
        
        this.config();

    }

    config(): void {
        this.router.get('/', typeFDController.list );
        this.router.post('/', typeFDController.create);
        this.router.delete('/:id', typeFDController.delete);
        this.router.put('/:id', typeFDController.update);
        this.router.get('/:id' ,  typeFDController.get)
    }

}

const typeFDRoutes = new TypeFDRoutes();
export default typeFDRoutes.router;