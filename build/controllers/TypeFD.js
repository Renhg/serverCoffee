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
exports.typeFDController = void 0;
const database_1 = __importDefault(require("../database"));
class TypeFDController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tFD = yield database_1.default.query('SELECT * FROM type_FD');
            res.json(tFD);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO type_FD set ?', [req.body]);
            res.json({ message: 'saved data ' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM type_FD WHERE id = ?', [id]);
            res.json({ text: 'deleted data  ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE type_FD set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The was updated: ' + req.params.id });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tfd = yield database_1.default.query('SELECT * FROM type_FD WHERE id = ?', [id]);
            console.log(tfd);
            if (tfd.length > 0) {
                return res.json(tfd[0]);
            }
            res.status(404).json({ text: 'data does not exist: ' + req.params.id });
        });
    }
}
exports.typeFDController = new TypeFDController();
exports.default = exports.typeFDController;
//# sourceMappingURL=TypeFD.js.map