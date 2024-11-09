const pool = require("../config/db");

function selectAll() {
    return pool.query('select * from posts;')
}

async function selectById(postId) {
    const [posts] = await pool.query('select * from posts where id = ?', [postId]);

    if (posts.length === 0) {
        return null;
    }

    return posts[0];
}

function insertPost ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    return pool.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values ( ? , ? , ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    )
}

function updatePostById (postId, { titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    return pool.query('update posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, where autor_id = ? )',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    )
}

function deleteById (postId) {
    return pool.query('delete from posts where id =?', [postId])
}

module.exports = {
    selectAll, selectById, insertPost, updatePostById, deleteById
};