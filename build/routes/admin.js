"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = __importDefault(require("../controllers/admin"));
class PemployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', admin_1.default.list);
        this.router.get('/perm', admin_1.default.listPerm);
        this.router.post('/', admin_1.default.create);
        this.router.put('/:id', admin_1.default.update);
        this.router.delete('/:id', admin_1.default.delete);
        this.router.get('/:id', admin_1.default.get);
    }
}
const pemployeeRoutes = new PemployeeRoutes();
exports.default = pemployeeRoutes.router;
//# sourceMappingURL=admin.js.map