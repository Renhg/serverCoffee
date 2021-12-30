"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mesa_1 = __importDefault(require("../controllers/mesa"));
class MesaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', mesa_1.default.list);
        this.router.post('/', mesa_1.default.create);
        this.router.put('/:id', mesa_1.default.update);
        this.router.delete('/:id', mesa_1.default.delete);
        this.router.get('/:id', mesa_1.default.get);
    }
}
const mesaRoutes = new MesaRoutes();
exports.default = mesaRoutes.router;
//# sourceMappingURL=mesa.js.map