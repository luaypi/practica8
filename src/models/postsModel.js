const pool = require("../config/db");

function selectAll() {
    return pool.query('select * from posts;')
}

async function selectById(postsId) {
    const [autores] = await pool.query('select * from posts where id = ?', [postsId]);

    if (postsId.length === 0) {
        return null;
    }

    return posts[0];
}

module.exports = {
    selectAll, selectById
}