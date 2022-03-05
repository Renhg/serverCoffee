"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temployee_1 = __importDefault(require("../controllers/temployee"));
class TEmployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/list/:enterprise', temployee_1.default.list);
        this.router.post('/', temployee_1.default.create);
        this.router.put('/:id', temployee_1.default.update);
        this.router.delete('/:id', temployee_1.default.delete);
        this.router.get('/:id', temployee_1.default.get);
    }
}
const temployeeRoutes = new TEmployeeRoutes();
exports.default = temployeeRoutes.router;
//# sourceMappingURL=temployee.js.map