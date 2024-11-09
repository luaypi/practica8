const { selectAll, selectById, insertAutor, updateAutorById, deleteAutorById} = require("../models/autoresModel");

const getAllAutores = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
}


const getById = async (req, res, next) => {
    const { autorId } = req.params;
    try {
        const autor = await selectById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

//las funciones dentro de controlador son las de modelos
const createAutor = async (req, res, next) => {

    try {
        // Insertar el nuevo autor
        const [result] = await insertAutor(req.body);
        // Recuperar los datos del nuevo autor
        const autor = await selectById(result.insertId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

const updateAutor = async (req, res, next) => {
    const { autorId } = req.params;

    try {
        const [result] = await updateAutorById(autorId, req.body);
        const autor = await selectById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

const deleteAutor = async (req, res, next) => {
    const { autorId } = req.params;

    try {
        const autor = await selectById(autorId);
        await deleteAutorById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllAutores, getById, createAutor, updateAutor, deleteAutor
}

// De ejemplos anteriores: getMayores, createCliente, updateCliente, deleteCliente, getById