const express = require("express");
const router = express.Router();

const { getAllPosts, getById, selectPostByAuthor, createPost, updatePost, deletePost } = require('../../controllers/postsController');
const { checkPostId } = require('../../utils/middlewares');

router.get('/', getAllPosts);
router.get('/:id', getById);
router.get('/autores-post/:id', selectPostByAuthor);

router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;