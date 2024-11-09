const pool = require("../config/db");

function selectAll() {
    return pool.query('select * from autores;')
}

async function selectById(autorId) {
    const [autores] = await pool.query('select * from autores where id = ?', [autorId]);

    if (autores.length === 0) {
        return null;
    }

    return autores[0];
}

function insertAutor ({ nombre, email, imagen }) {
    return pool.query('insert into autores (nombre, email, imagen) values (? , ? , ?)',
        [nombre, email, imagen]
    );
}

function updateAutorById (autorId, { nombre, email, imagen }) {
    return pool.query(
        'update autores set nombre = ?, email = ?, imagen = ?)',
        [nombre, email, imagen]
    );
}

function deleteAutorById (autorId ) {
    return pool.query('delete from autores where id =?', [autorId])
}

module.exports = {
    selectAll, selectById, insertAutor, updateAutorById, deleteAutorById
};
