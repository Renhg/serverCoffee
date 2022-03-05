import mysql from 'promise-mysql';
import keys from './keys';
import keyslocal from './keylocal'


const pool = mysql.createPool(keyslocal.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is linked');
    });

export default pool;