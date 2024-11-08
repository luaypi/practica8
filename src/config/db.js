const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'G4nad0ra_',
    port: 3306,
    database: 'blog_api_lunaayala',
    // multipleStatements: true
});

module.exports = pool.promise();