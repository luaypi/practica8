//DESGLOSE: 1. importar módulos para crear el servidor, 
// 2. configuración variables de entorno, 3. crear el servidor, 4. definición del puerto
// 5. iniciar el servidor
// 6. listeners para el servidor y para error

// Creación del servidor
const http = require('http');
const app = require('./src/app');

// Config .env
require('dotenv').config();

//Creación servidor
const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT);

// listeners
server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
});