const { selectAll, insertAutor, selectById} = require("../models/autoresModel");

const getAllAutores = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
}


// const getById = async (req, res, next) => {
//     const { autorId } = req.params;
//     try {
//         const autor = await selectById(autorId);
//         res.json(autor);
//     } catch (error) {
//         next(error);
//     }
// }

//las funciones dentro de controlador son las de modelos
const createAutor = async (req, res, next) => {

    try {
        // Insertar el nuevo cliente
        const [result] = await insertAutor(req.body);
        // Recuperar los datos del nuevo cliente
        const autor = await selectById(result.insertId);

        res.json(autor);
    } catch (error) {
        next(error);
    }
}

// const updateCliente = async (req, res, next) => {
//     const { clienteId } = req.params;

//     try {
//         const [result] = await updateClienteById(clienteId, req.body);
//         const cliente = await selectById(clienteId);
//         res.json(cliente);
//     } catch (error) {
//         next(error);
//     }
// }

// const deleteCliente = async (req, res, next) => {
//     const { clienteId } = req.params;

//     try {
//         const cliente = await selectById(clienteId);
//         await deleteById(clienteId);
//         res.json(cliente);
//     } catch (error) {
//         next(error);
//     }
// }

module.exports = {
    getAllAutores, createAutor
}

// getMayores, createCliente, updateCliente, deleteCliente, getById