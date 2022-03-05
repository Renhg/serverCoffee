"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const texpenses_1 = __importDefault(require("../controllers/texpenses"));
class TexpensesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', texpenses_1.default.list);
        this.router.post('/', texpenses_1.default.create);
        this.router.delete('/:id', texpenses_1.default.delete);
        this.router.put('/:id', texpenses_1.default.update);
        this.router.get('/:id', texpenses_1.default.get);
    }
}
const texpensesRoutes = new TexpensesRoutes();
exports.default = texpensesRoutes.router;
//# sourceMappingURL=texpenses.js.map