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
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ing = yield database_1.default.query('SELECT * FROM USER');
            res.json(ing);
        });
    }
    type(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type } = req.params;
            const FD = yield database_1.default.query('SELECT * FROM USER WHERE TYPE LIKE ?', [type]);
            res.json(FD);
        });
    }
    email(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const r = yield database_1.default.query('SELECT * FROM USER WHERE EMAIL LIKE ?', [email]);
            if (r.length > 0) {
                return res.json(r[0]);
            }
            res.json(r);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO USER set ?', [req.body]);
            res.json({ message: 'saved data' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM USER WHERE ID = ?', [id]);
            res.json({ text: 'deleted data' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE USER set ? WHERE ID = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ing = yield database_1.default.query('SELECT * FROM USER WHERE ID = ?', [id]);
            console.log(ing);
            if (ing.length > 0) {
                return res.json(ing[0]);
            }
            res.json(ing);
        });
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=user.js.map