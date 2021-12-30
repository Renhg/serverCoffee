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
class DetailorderController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detailOrder = yield database_1.default.query('SELECT * FROM detail_Order');
            res.json(detailOrder);
        });
    }
    countOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { count } = req.params;
            const detailOrder = yield database_1.default.query('SELECT COUNT(STATUS) AS status from detail_Order INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.status = ? AND order_customer.confirmed = true ', [count]);
            res.json(detailOrder);
        });
    }
    getlistFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fdid } = req.params;
            const { orderid } = req.params;
            const detailOrder = yield database_1.default.query('SELECT * FROM detail_Order where fdid = ? and order_id = ?', [fdid, orderid]);
            console.log(detailOrder);
            if (detailOrder.length > 0) {
                return res.json(detailOrder[0]);
            }
            return res.json([detailOrder[0]]);
        });
    }
    listDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first } = req.params;
            const { last } = req.params;
            const s = yield database_1.default.query('SELECT detail_Order.id, detail_Order.amount, order_customer.name_order, order_customer.NIT, detail_Order.idmesa, FD.name, detail_Order.collect from detail_Order INNER JOIN FD on detail_Order.fdid = FD.id INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.created_at BETWEEN ? AND ?', [first, last]);
            res.json(s);
        });
    }
    listOrderCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cust } = req.params;
            const detailOrder = yield database_1.default.query('SELECT detail_Order.id, detail_Order.amount, detail_Order.employee, order_customer.name_order, order_customer.NIT, detail_Order.idmesa, FD.name, detail_Order.collect from detail_Order INNER JOIN FD on detail_Order.fdid = FD.id INNER JOIN order_customer on detail_Order.order_id = order_customer.id WHERE detail_Order.order_id = ?', [cust]);
            res.json(detailOrder);
        });
    }
    customerAwait(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detailOrder = yield database_1.default.query('SELECT detail_Order.order_id FROM detail_Order INNER JOIN order_customer on detail_Order.order_id=order_customer.id WHERE detail_Order.status = FALSE AND order_customer.confirmed = TRUE GROUP BY detail_Order.order_id');
            res.json(detailOrder);
        });
    }
    totalPay(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cust } = req.params;
            const detailOrder = yield database_1.default.query('SELECT SUM(detail_Order.collect) AS total FROM detail_Order WHERE detail_Order.order_id = ?', [cust]);
            if (detailOrder.length > 0) {
                return res.json(detailOrder[0]);
            }
            return res.json(detailOrder[0]);
        });
    }
    Orders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { count } = req.params;
            const detailOrder = yield database_1.default.query('SELECT * from detail_Order WHERE status like ?', [count]);
            res.json(detailOrder);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detailOrder = yield database_1.default.query('INSERT INTO detail_Order set ?', [req.body]);
            res.json(detailOrder);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM detail_Order WHERE id = ?', [id]);
            res.json({ text: 'deleted data' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE detail_Order set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    updatestatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE detail_Order set ? WHERE detail_Order.order_id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const detailOrder = yield database_1.default.query('SELECT * FROM detail_Order WHERE id = ?', [id]);
            console.log(detailOrder);
            if (detailOrder.length > 0) {
                return res.json(detailOrder[0]);
            }
            res.status(404).json({ text: 'detail does not exist: ' + req.params.id });
        });
    }
}
const detailorderController = new DetailorderController();
exports.default = detailorderController;
//# sourceMappingURL=dorder.js.map