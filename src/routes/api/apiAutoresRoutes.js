const router = require('express').Router();

const { getAllAutores, createAutor } = require('../../controllers/autoresController');
// const { checkAutorId } = require('../../utils/middlewares');

router.get('/', getAllAutores);
// router.get('/:autorId', checkAutorId, getById);

router.post('/', createAutor);
// router.put('/:autorId', checkAutorId, updateAutor);
// router.delete('/:autorId', checkAutorId, deleteCliente);

module.exports = router;