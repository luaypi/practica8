const pool = require("../config/db");

function selectAll() {
    return pool.query('select * from autores;')
}

async function selectById(autoresId) {
    const [autores] = await pool.query('select * from autores where id = ?', [autoresId]);

    if (autoresId.length === 0) {
        return null;
    }

    return autores[0];
}

function selectAutorByEmail(email) {
    if (email.length === 0) {
        return null;
    }

    const [result] = pool.query('select * from autores where email = ?', [email]);

    return result[0];
}

function selectAutorByName({ nombre, email }) {
    return pool.query('select name, email where nombre like = ?', [nombre, email]);

    if (autores.length === 0) {
        return null;
    }

    return autores[0];
}

function insertAutor ({ nombre, email, imagen }) {
    return pool.query('insert into autores (nombre, email, imagen) values ( ? , ? , ?)',
        [nombre, email, imagen]
    )
}

function updateAutor ({ nombre, email, imagen }) {
    return pool.query('update autores set nombre = ?, email = ?, imagen = ?)',
        [nombre, email, imagen]
    )
}

function deleteAutor ({ nombre, email, imagen }) {
    return pool.query('delete from autores where id =?', [autoresId])
}

module.exports = {
    selectAll, selectById, selectAutorByEmail, selectAutorByName, insertAutor, updateAutor, deleteAutor
};