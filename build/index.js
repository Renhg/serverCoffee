"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const TypeFD_1 = __importDefault(require("./routes/TypeFD"));
const fd_1 = __importDefault(require("./routes/fd"));
const order_1 = __importDefault(require("./routes/order"));
const dorder_1 = __importDefault(require("./routes/dorder"));
const shopping_1 = __importDefault(require("./routes/shopping"));
const ingredient_1 = __importDefault(require("./routes/ingredient"));
const mesa_1 = __importDefault(require("./routes/mesa"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_1.default);
        this.app.use('/api/tfd', TypeFD_1.default);
        this.app.use('/api/fd', fd_1.default);
        this.app.use('/api/order', order_1.default);
        this.app.use('/api/dorder', dorder_1.default);
        this.app.use('/api/shopping', shopping_1.default);
        this.app.use('/api/ing', ingredient_1.default);
        this.app.use('/api/mesa', mesa_1.default);
    }
    start() {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log('Server on port', port);
        });
    }
}
const server = new Server();
server.start();
