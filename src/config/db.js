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
connection.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos! Reinténtalo ', err);
    } else {
      console.log('¡Felicidades! La conexión ha funcionado');
    }
  });
  
module.exports = pool.promise();