"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class OrderController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const FD = yield database_1.default.query('SELECT * FROM order_customer');
            res.json(FD);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO order_customer set ?', [req.body]);
            res.json({ message: 'saved data' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM order_customer WHERE id = ?', [id]);
            res.json({ text: 'deleted data' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE order_customer set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const order = yield database_1.default.query('SELECT * FROM order_customer WHERE id = ?', [id]);
            console.log(order);
            if (order.length > 0) {
                return res.json(order[0]);
            }
            res.status(404).json({ text: 'order does not exist: ' + req.params.id });
        });
    }
}
const orderController = new OrderController();
exports.default = orderController;
