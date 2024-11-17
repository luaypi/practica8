const express = require("express");
const router = express.Router();

const { getAllAutores, getById, createAutor, updateAutor, deleteAutor, getByEmail } = require('../../controllers/autoresController');
const { checkAutorId } = require('../../utils/middlewares');

router.get('/', getAllAutores);
router.get('/:autorId', getById);

router.post('/', createAutor);
router.put('/:autorId', updateAutor);
router.delete('/:autorId', deleteAutor);

module.exports = router;

