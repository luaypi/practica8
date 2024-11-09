const router = require('express').Router();

const { getAllPosts, getById, createPost, updatePost, deletePost  } = require('../../controllers/postsController');
const { checkPostId } = require('../../utils/middlewares');

router.get('/', getAllPosts);
router.get('/:postId', checkPostId, getById);
//by lunix
// router. get('/buscar', lookPostsByName);
// router.get('/buscar', lookPostsByCategoria);
// router.get('/buscar', lookPostsByDateofCreation);

router.post('/', createPost);
router.put('/:postId', checkPostId, updatePost);
router.delete('/:postId', checkPostId, deletePost);

module.exports = router;