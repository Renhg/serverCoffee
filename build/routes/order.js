"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = __importDefault(require("../controllers/order"));
class OrderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', order_1.default.list);
        this.router.post('/', order_1.default.create);
        this.router.delete('/:id', order_1.default.delete);
        this.router.put('/:id', order_1.default.update);
        this.router.get('/:id', order_1.default.get);
        this.router.get('/last/id', order_1.default.getlast);
    }
}
const orderRoutes = new OrderRoutes();
exports.default = orderRoutes.router;
