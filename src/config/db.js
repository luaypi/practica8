const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'G4nad0ra_',
    port: 3306,
    database: 'blog_api_lunaayala',
    // multipleStatements: true
});

// Conexión a la base de datos
const promisePool = pool.promise();

promisePool.getConnection()
    .then(connection => {
        console.log('¡Conexión exitosa a la base de datos! Vaya crack Luna 🤩');
        connection.release();  // Aquí liberamos la conexión después de usarla
    })
    .catch(err => {
        console.error('Error de conexión, pero que no cunda el pánico 😉', err);
    });


module.exports = pool.promise();