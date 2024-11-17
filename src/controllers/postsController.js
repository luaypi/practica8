const { selectAll, selectById, getPostsByAuthor, insertPost, updatePostById, deleteById } = require("../models/postsModel");
const { post } = require("../routes/apiRoutes");

const getAllPosts = async (req, res, next) => {
    console.log("entra0");
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error);
    }
};


const getById = async (req, res, next) => {
    let id = req.params.id;
    console.log("parametros:" ,id);
    try {
        const post = await selectById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        console.log(post);
        res.json(post);  
    } catch (error) {
        next(error);  
    }
};

const selectPostByAuthor = async (req, res, next) => {
    let id = req.params.id;
    console.log("parametros:" ,id);
    try {
        const post = await getPostsByAuthor(id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        console.log(post);
        res.json(post);  
    } catch (error) {
        next(error);  
    }
};


//las funciones dentro de controlador son las de modelos
const createPost = async (req, res, next) => {

    try {
        // req.body.staff_id = req.user.id; 
        // Insertar el nuevo post
        const [result] = await insertPost(req.body);
        // Recuperar los datos del nuevo post
        const post = await selectById(result.insertId);

        res.json(post);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    const { postId } = req.params;

    try {
        const [result] = await updatePostById(postId, req.body);
        const post = await selectById(postId);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

const deletePost= async (req, res, next) => {
    const { postId } = req.params;

    try {
        const post = await selectById(postId);
        await deleteById(postId);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts, getById, selectPostByAuthor, createPost, updatePost, deletePost
}