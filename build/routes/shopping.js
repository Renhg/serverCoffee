"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopping_1 = __importDefault(require("../controllers/shopping"));
class FDRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', shopping_1.default.list);
        this.router.post('/', shopping_1.default.create);
        this.router.put('/:id', shopping_1.default.update);
        this.router.delete('/:id', shopping_1.default.delete);
        this.router.get('/:id', shopping_1.default.get);
        this.router.get('/all/date/:first/:last', shopping_1.default.listDate);
    }
}
const shoppingRoutes = new FDRoutes();
exports.default = shoppingRoutes.router;
