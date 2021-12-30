import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index';
import typeFDRoutes from './routes/TypeFD';
import fdRoutes from './routes/fd';
import orderRoutes from './routes/order';
import detailorderRoutes from './routes/dorder'
import shoppingRoutes from './routes/shopping';
import ingredientRoutes from './routes/ingredient';
import mesaRoutes from './routes/mesa';
import texpensesRoutes from './routes/texpenses';
import employeeRoutes from './routes/employee';
import temployeeRoutes from './routes/temployee';
import scheduleRoutes from './routes/schedule';
import pemployeeRoutes from './routes/admin';

class Server{

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000) 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/tfd', typeFDRoutes);
        this.app.use('/api/fd', fdRoutes);
        this.app.use('/api/order', orderRoutes);
        this.app.use('/api/dorder', detailorderRoutes);
        this.app.use('/api/shopping', shoppingRoutes);
        this.app.use('/api/ing', ingredientRoutes); 
        this.app.use('/api/mesa', mesaRoutes);
        this.app.use('/api/texp', texpensesRoutes);
        this.app.use('/api/employee', employeeRoutes);
        this.app.use('/api/temployee', temployeeRoutes);
        this.app.use('/api/shedule', scheduleRoutes);
        this.app.use('/api/admin', pemployeeRoutes);
    }

    start(): void {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log('Server on port', port);
        })
    }
}

const server = new Server();
server.start();