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
class FDController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const FD = yield database_1.default.query('SELECT * FROM FD');
            res.json(FD);
        });
    }
    Tfood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tfood } = req.params;
            const FD = yield database_1.default.query('SELECT * FROM FD WHERE typ_id LIKE ?', [tfood]);
            res.json(FD);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO FD set ?', [req.body]);
            res.json({ message: 'saved data' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM FD WHERE id = ?', [id]);
            res.json({ text: 'deleted data' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE FD set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated date id:' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const FD = yield database_1.default.query('SELECT * FROM FD WHERE id = ?', [id]);
            console.log(FD);
            if (FD.length > 0) {
                return res.json(FD[0]);
            }
            res.status(404).json({ text: 'type food/drinks does not exist: ' + req.params.id });
        });
    }
}
const fdController = new FDController();
exports.default = fdController;
//# sourceMappingURL=FD.js.map