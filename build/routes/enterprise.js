"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enterprise_1 = __importDefault(require("../controllers/enterprise"));
class EnterpriseRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', enterprise_1.default.list);
        this.router.post('/', enterprise_1.default.create);
        this.router.put('/:id', enterprise_1.default.update);
        this.router.delete('/:id', enterprise_1.default.delete);
        this.router.get('/:id', enterprise_1.default.get);
        this.router.get('/email/:email', enterprise_1.default.email);
        this.router.get('/user/:user', enterprise_1.default.listUser);
    }
}
const enterpriseRoutes = new EnterpriseRoutes();
exports.default = enterpriseRoutes.router;
//# sourceMappingURL=enterprise.js.map