"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keylocal_1 = __importDefault(require("./keylocal"));
const pool = promise_mysql_1.default.createPool(keylocal_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is linked');
});
exports.default = pool;
//# sourceMappingURL=database.js.map