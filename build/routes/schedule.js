"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schedule_1 = __importDefault(require("../controllers/schedule"));
class ScheduleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', schedule_1.default.list);
        this.router.post('/', schedule_1.default.create);
        this.router.put('/:id', schedule_1.default.update);
        this.router.delete('/:id', schedule_1.default.delete);
        this.router.get('/:id', schedule_1.default.get);
    }
}
const scheduleRoutes = new ScheduleRoutes();
exports.default = scheduleRoutes.router;
//# sourceMappingURL=schedule.js.map