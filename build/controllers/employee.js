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
class EmployeeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ing = yield database_1.default.query('SELECT * FROM EMPLOYEE');
            res.json(ing);
        });
    }
    Temployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { temployee } = req.params;
            const FD = yield database_1.default.query('SELECT *, EMPLOYEE.ID AS EMPLOYEEID FROM EMPLOYEE INNER JOIN USER ON EMPLOYEE.USER = USER.ID WHERE EMPLOYEE.TYPE LIKE ?', [temployee]);
            res.json(FD);
        });
    }
    emailEmploye(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const r = yield database_1.default.query('SELECT * FROM EMPLOYEE WHERE USER LIKE ?', [email]);
            if (r.length > 0) {
                return res.json(r[0]);
            }
            return res.json([r[0]]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const add = yield database_1.default.query('INSERT INTO EMPLOYEE set ?', [req.body]);
            res.json(add);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM EMPLOYEE WHERE ID = ?', [id]);
            res.json({ text: 'deleted data' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE EMPLOYEE set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ing = yield database_1.default.query('SELECT * FROM EMPLOYEE WHERE id = ?', [id]);
            console.log(ing);
            if (ing.length > 0) {
                return res.json(ing[0]);
            }
            res.status(404).json({ text: 'EMPLOYEE does not exist: ' + req.params.id });
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { enterprise } = req.params;
            const ing = yield database_1.default.query('SELECT * FROM EMPLOYEE WHERE USER LIKE ? AND ENTERPRISE LIKE ?', [id, enterprise]);
            console.log(ing);
            if (ing.length > 0) {
                return res.json(ing[0]);
            }
            res.status(404).json({ text: 'EMPLOYEE does not exist: ' + req.params.id });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
//# sourceMappingURL=employee.js.map