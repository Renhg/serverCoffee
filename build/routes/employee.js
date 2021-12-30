"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_1 = __importDefault(require("../controllers/employee"));
class EmployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', employee_1.default.list);
        this.router.post('/', employee_1.default.create);
        this.router.put('/:id', employee_1.default.update);
        this.router.delete('/:id', employee_1.default.delete);
        this.router.get('/:id', employee_1.default.get);
        this.router.get('/type/:temployee', employee_1.default.Temployee);
        this.router.get('/email/:email', employee_1.default.emailEmploye);
    }
}
const employeeRoutes = new EmployeeRoutes();
exports.default = employeeRoutes.router;
//# sourceMappingURL=employee.js.map