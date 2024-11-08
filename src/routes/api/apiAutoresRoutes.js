const router = require('express').Router();

const { getAllAutores, createAutor } = require('../../controllers/autoresController');
const { checkAutorId } = require('../../utils/middlewares');

router.get('/', getAllAutores);
router.get('/:autorId', checkAutorId, getById);
//by lunix
router. get('/buscar', lookAutoresByName);
router.get('buscar', lookAutoresByEmail);
router.get('/:autorId/posts/cantidad', obtainQuantityOfPostsByAuthor);
router.get('/mas-posts', obtainAutorwithmoreposts);
router.get('/:autorId/posts/autoresportitulo', obtainTittlePerAutor);
router.get('/:autorId/posts/autoresporcategoria', obtainCategoryOfAutor);

router.post('/', createAutor);
router.put('/:autorId', checkAutorId, updateAutor);
router.delete('/:autorId', checkAutorId, deleteAutor);

module.exports = router;