"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FD_1 = __importDefault(require("../controllers/FD"));
class FDRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', FD_1.default.list);
        this.router.post('/', FD_1.default.create);
        this.router.put('/:id', FD_1.default.update);
        this.router.delete('/:id', FD_1.default.delete);
        this.router.get('/:id', FD_1.default.get);
        this.router.get('/tfood/:tfood', FD_1.default.Tfood);
    }
}
const fdRoutes = new FDRoutes();
exports.default = fdRoutes.router;
