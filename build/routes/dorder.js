"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dorder_1 = __importDefault(require("../controllers/dorder"));
class DetailorderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', dorder_1.default.list);
        this.router.post('/', dorder_1.default.create);
        this.router.put('/:id', dorder_1.default.update);
        this.router.delete('/:id', dorder_1.default.delete);
        this.router.get('/:id', dorder_1.default.get);
        this.router.get('/status/:count', dorder_1.default.countOrders);
        this.router.get('/order/:count', dorder_1.default.Orders);
        this.router.get('/order/customer/:count', dorder_1.default.getlistFood);
    }
}
const detailorderRoutes = new DetailorderRoutes();
exports.default = detailorderRoutes.router;
