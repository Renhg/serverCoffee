"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingredient_1 = __importDefault(require("../controllers/ingredient"));
class IngredientRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingredient_1.default.list);
        this.router.post('/', ingredient_1.default.create);
        this.router.put('/:id', ingredient_1.default.update);
        this.router.delete('/:id', ingredient_1.default.delete);
        this.router.get('/:id', ingredient_1.default.get);
    }
}
const ingredientRoutes = new IngredientRoutes();
exports.default = ingredientRoutes.router;
//# sourceMappingURL=ingredient.js.map