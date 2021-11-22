"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TypeFD_1 = __importDefault(require("../controllers/TypeFD"));
class TypeFDRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', TypeFD_1.default.list);
        this.router.post('/', TypeFD_1.default.create);
        this.router.delete('/:id', TypeFD_1.default.delete);
        this.router.put('/:id', TypeFD_1.default.update);
        this.router.get('/:id', TypeFD_1.default.get);
    }
}
const typeFDRoutes = new TypeFDRoutes();
exports.default = typeFDRoutes.router;
