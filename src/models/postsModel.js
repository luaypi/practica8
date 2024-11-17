const pool = require("../config/db");

function selectAll() {
    return pool.query(`    SELECT 
        posts.id, 
        posts.titulo, 
        posts.descripcion, 
        posts.fecha_creacion, 
        posts.categoria, 
        posts.autor_id, 
        autores.nombre, 
        autores.email,
        autores.imagen
    FROM posts
    JOIN autores
    ON posts.autor_id = autores.id;`);
}

async function selectById(postId) {
    console.log("id desde el modelo ",postId);
    const query = `
    SELECT 
        posts.id, 
        posts.titulo, 
        posts.descripcion, 
        posts.fecha_creacion, 
        posts.categoria, 
        posts.autor_id, 
        autores.nombre, 
        autores.email,
        autores.imagen
    FROM posts
    JOIN autores
    ON posts.autor_id = autores.id
    WHERE posts.id = ?;
    `;

    const [posts] = await pool.query(query, [postId]);
    if (posts.lenght === 0) return null;
    return posts[0];
};

async function getPostsByAuthor (autor_id){
    const query = `
    SELECT 
        posts.id, 
        posts.titulo, 
        posts.descripcion, 
        posts.fecha_creacion, 
        posts.categoria, 
        posts.autor_id, 
        autores.nombre, 
        autores.email,
        autores.imagen
    FROM posts
    JOIN autores
    ON posts.autor_id = autores.id
    WHERE autores.id = ?;
    `;

    const [posts] = await pool.query(query, [autor_id]);
    if (posts.lenght === 0) return null;
    return posts;
    
};

function insertPost ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    return pool.query('INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES ( ? , ? , ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    )
};

function updatePostById (postId, { titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    // const query =`UPDATE posts SET titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ? WHERE id = ?)`
    return pool.query('UPDATE posts SET titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ? WHERE id = ?',
        [titulo, descripcion, fecha_creacion, categoria, autor_id, postId]
    )
};

function deleteById (postId) {
    return pool.query('delete from posts where id =?', [postId])
};

module.exports = {
    selectAll, selectById, getPostsByAuthor, insertPost, updatePostById, deleteById
};