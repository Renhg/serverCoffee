import mysql from 'promise-mysql';
import keys from './keys';
//import keys from './keylocal'


const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is linked');
    });

export default pool;