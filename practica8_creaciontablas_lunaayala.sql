CREATE DATABASE blog_api_lunaayala;
USE blog_api_lunaayala;
CREATE TABLE autores (
id INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL, 
email VARCHAR(100) UNIQUE NOT NULL, 
imagen VARCHAR(255)
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    titulo VARCHAR(200) NOT NULL, 
    descripcion TEXT NOT NULL, 
    fecha_creacion TIMESTAMP NOT NULL DEFAULT NOW(),
    categoria ENUM('Deportes', 'Ciencia y Salud', 'Naturaleza', 'Comunicación', 'Historia', 'Actualidad') NOT NULL,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

SHOW TABLES;
DESCRIBE autores;
DESCRIBE posts;

INSERT INTO autores (nombre, email, imagen) VALUES 
('Ana García', 'anag@hotmail.com', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Luis Martínez', 'luismmm@gmail.com', 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('María López', 'marialop@hotmail.es', 'https://plus.unsplash.com/premium_photo-1701815884301-be7c48feda5c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Carlos Pérez', 'carlosperez@hotmail.com', 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Raquel Fernández', 'raquelf@gmail.com', 'https://plus.unsplash.com/premium_photo-1687832254672-bf177d8819df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Sofía Ramírez', 'sofia_ramirez@gmail.com', 'https://images.unsplash.com/photo-1696890380736-db381e150013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxtdWplciUyMGNhcmF8ZW58MHx8MHx8fDA%3D'),
('Miguel Fernández', 'miguelfernandez@hotmail.com', 'https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Laura Torres', 'laura_torres789@yahoo.es', 'https://images.unsplash.com/photo-1644860704769-c61c84be7836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxtdWplciUyMGNhcmF8ZW58MHx8MHx8fDA%3D'),
('Javier González', 'javierg@hotmail.com', 'https://plus.unsplash.com/premium_photo-1675804300600-888042d9e90d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Paula Herrera', 'paula_herreraaa@gmail.com', 'https://images.unsplash.com/photo-1679611978819-f10168367155?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Fernando Rivas', 'fernandorivasss@hotmail.com', 'https://images.unsplash.com/photo-1668531282396-96bea4cacab5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Claudia Morales', 'claudia_morales1@hotmail.com', 'https://images.unsplash.com/photo-1579591919791-0e3737ae3808?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Raúl Moreno', 'raulmorenis@yahoo.com', 'https://images.unsplash.com/photo-1702449269565-8bbe32972f65?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Julia Ortega', 'juliaortegagg@gmail.com', 'https://images.unsplash.com/photo-1679666715413-1e6abc4710ea?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Andrés Romero', 'andresromerin@hotmail.com', 'https://images.unsplash.com/photo-1624395213081-608f51284ddd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');


INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES 
('El Futuro del Deporte', 'Exploramos las innovaciones tecnológicas que están cambiando el mundo del deporte.', NOW(), 'Deportes', 1),
('Nutrición y Salud', 'Una guía completa sobre cómo una buena alimentación puede mejorar tu calidad de vida.', NOW(), 'Ciencia y Salud', 2),
('Bellezas Naturales', 'Los lugares más impresionantes de la naturaleza que debes visitar.', NOW(), 'Naturaleza', 3),
('Historia del Cine', 'Un recorrido por la evolución del cine a lo largo de las décadas.', NOW(), 'Historia', 4),
('Impacto de las Redes Sociales', 'Cómo las redes sociales han cambiado la forma en que nos comunicamos.', NOW(), 'Comunicación', 5),
('Grandes Eventos Deportivos', 'Los eventos deportivos que no te puedes perder este año.', NOW(), 'Deportes', 6),
('El Poder de la Lectura', 'La importancia de la lectura en la educación y el desarrollo personal.', NOW(), 'Ciencia y Salud', 7),
('Conservación del Medio Ambiente', 'Medidas efectivas para conservar nuestro planeta.', NOW(), 'Naturaleza', 8),
('Cine y Sociedad', 'Cómo el cine refleja y afecta a nuestra sociedad.', NOW(), 'Historia', 9),
('Estrategias de Marketing Digital', 'Las mejores prácticas para llevar tu negocio al siguiente nivel.', NOW(), 'Comunicación', 10),
('Fútbol: Pasión Mundial', 'Un análisis del impacto cultural del fútbol en el mundo.', NOW(), 'Deportes', 11),
('Ciencia Ficción en la Literatura', 'Los mejores libros de ciencia ficción que debes leer.', NOW(), 'Ciencia y Salud', 12),
('Fauna en Peligro', 'Las especies en peligro de extinción y cómo ayudar.', NOW(), 'Naturaleza', 13),
('El Arte de la Fotografía', 'Un vistazo a las técnicas que hacen de la fotografía un arte.', NOW(), 'Historia', 14),
('Marketing Emocional', 'Cómo conectar con tu audiencia a través de las emociones.', NOW(), 'Comunicación', 15),
('La Ciencia del Sueño', 'Explorando cómo el sueño afecta nuestra salud y bienestar.', NOW(), 'Ciencia y Salud', 1),
('Las Mejores Rutas de Senderismo', 'Descubre las mejores rutas para disfrutar de la naturaleza.', NOW(), 'Naturaleza', 2),
('Cine de Terror: Un Estudio', 'Analizando por qué nos atraen las películas de terror.', NOW(), 'Historia', 3),
('Redes Sociales y Marketing', 'Cómo utilizar las redes sociales para potenciar tu marca.', NOW(), 'Comunicación', 4),
('Aventuras en el Deporte', 'Relatos inspiradores de deportistas que superaron obstáculos.', NOW(), 'Deportes', 5),
('Ciencia y Tecnología', 'Las últimas innovaciones que están cambiando nuestra vida.', NOW(), 'Ciencia y Salud', 6),
('Bellezas Ocultas del Mundo', 'Lugares sorprendentes que pocos conocen.', NOW(), 'Naturaleza', 7),
('La Historia de la Música', 'Desde sus orígenes hasta la actualidad.', NOW(), 'Historia', 8),
('Impacto de la Publicidad', 'Cómo la publicidad afecta nuestras decisiones diarias.', NOW(), 'Comunicación', 9),
('El Rol de los Animales en la Ciencia', 'Cómo los animales han contribuido a grandes descubrimientos.', NOW(), 'Ciencia y Salud', 10);
