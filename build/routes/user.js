"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', user_1.default.list);
        this.router.post('/', user_1.default.create);
        this.router.put('/:id', user_1.default.update);
        this.router.delete('/:id', user_1.default.delete);
        this.router.get('/:id', user_1.default.get);
        this.router.get('/email/:email', user_1.default.email);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=user.js.map