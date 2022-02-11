"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ShoppingController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const s = yield database_1.default.query('SELECT shopping.id, shopping.name, shopping.cost, shopping.stock, shopping.note, TEXPENSES.NAME as tname, shopping.created_at FROM shopping INNER JOIN TEXPENSES ON shopping.texp=TEXPENSES.ID');
            res.json(s);
        });
    }
    listDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first } = req.params;
            const { last } = req.params;
            const { enterprise } = req.params;
            const s = yield database_1.default.query('SELECT shopping.id, shopping.name, shopping.cost, shopping.stock, shopping.note, TEXPENSES.NAME as tname, shopping.created_at FROM shopping INNER JOIN TEXPENSES ON shopping.texp=TEXPENSES.ID WHERE shopping.created_at BETWEEN ? AND ? AND shopping.ENTERPRISE = ?', [first, last, enterprise]);
            res.json(s);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO shopping set ?', [req.body]);
            res.json({ message: 'saved data' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM shopping WHERE id = ?', [id]);
            res.json({ text: 'deleted data ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE shopping set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const s = yield database_1.default.query('SELECT * FROM shopping WHERE id = ?', [id]);
            console.log(s);
            if (s.length > 0) {
                return res.json(s[0]);
            }
            res.status(404).json({ text: 'shopp does no exist: ' + req.params.id });
        });
    }
}
const shoppingController = new ShoppingController();
exports.default = shoppingController;
//# sourceMappingURL=shopping.js.map