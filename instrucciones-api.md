# Recuperar todos los autores

GET /api/autores
Body: X
Headers: Authorization

Respuesta: 
- Un array con todos los autores

# Recuperar todos los clientes mayores de una edad

GET /api/clientes/mayores/EDADMIN
Body: X
Headers: X

Respuesta: 
- Un array con todos los clientes cuya edad sea mayor del valor dado
- Si no hay clientes, devuelve un mensaje informando al front

# Insertar un nuevo cliente

POST /api/clientes
Body: nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni
Headers: X

Respuesta: 
- Recibimos un objeto con los datos del nuevo cliente creado.

# Recuperar un cliente a partir de su ID

GET /api/clientes/IDCLIENTE
Body: X
Headers: X

Respuesta: 
- Si el ID existe, respondemos con el cliente
- Si no existe, respondemos con un status 404 indicando que el cliente no existe

# Actualizar los datos de un cliente

PUT /api/clientes/CLIENTEID
Body: nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni
Headers: X

Respuesta:
- Responder con los datos del cliente actualizado

# Borrar los datos de un cliente

DELETE /api/clientes/CLIENTEID
Body: X
Headers: X

Respuesta:
- Responder con los datos del cliente borrado

# Recuperar toda la lista de monitores con sus clientes asociados

GET /api/monitores/clientes
Body: X
Headers: X

Respuesta:
- Un array con toda la lista de monitores incluyendo en cada uno de ellos un array con sus clientes asociados

```js
[
    { id: 1, nombre: 'Alejandro', experiencia: 10, clientes: [...] },
    { id: 2, nombre: 'Rosa', experiencia: 4, clientes: [...] }
    ...
]
```


# API Staff

## Registro

Recibiendo los datos del nuevo usuario encriptaremos la password e insertaremos en la base de datos.

URL: /api/staff/registro
MÉTODO: POST
HEADERS: X
BODY: usuario, email, password

Respuesta: 
- Respondemos con el nuevo registro creado