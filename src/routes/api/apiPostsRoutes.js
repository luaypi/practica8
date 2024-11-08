const router = require('express').Router();

const { getAllPosts, createPost } = require('../../controllers/postsController');
const { checkPostId } = require('../../utils/middlewares');

router.get('/', getAllPosts);
router.get('/:autorId', checkPostId, getById);
//by lunix
router. get('/buscar', lookPostsByName);
router.get('/buscar', lookPostsByCategoria);
router.get('/buscar', lookPostsByDateofCreation);
// router.get('/:autorId/posts/cantidad', obtainQuantityOfPostsByAuthor);
// router.get('/mas-posts', obtainAutorwithmoreposts);
// router.get('/:autorId/posts/autoresportitulo', obtainTittlePerAutor);
// router.get('/:autorId/posts/autoresporcategoria', obtainCategoryOfAutor);

router.post('/', createPost);
router.put('/:autorId', checkAutorId, updatePost);
router.delete('/:autorId', checkAutorId, deletePost);

module.exports = router;