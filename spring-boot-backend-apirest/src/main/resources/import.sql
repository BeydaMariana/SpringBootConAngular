INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'Africa');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antártida');


INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (1, 'Andres', 'Guzmán', 'andres@gmail.com', '2019-07-07');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (2, 'Carla', 'Perez', 'carla@gmail.com', '2019-07-08');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (4, 'Pedro', 'Torres', 'pedro@gmail.com', '2019-07-09');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (4, 'Santiago', 'López', 'santiago@gmail.com', '2019-07-10');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (3, 'Esme', 'Ralda', 'esme@gmail.com', '2019-07-11');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (5, 'Boni', 'Facio', 'boni@gmail.com', '2019-07-12');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (7, 'Maria', 'Chon', 'maria@gmail.com', '2019-07-13');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (8, 'Juan', 'Fong', 'juan@gmail.com', '2019-07-14');

INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('andres', '$2a$10$oFAnzvZ53BDZMHhpAf/yNOBh13OwMiddZa5/RnwlizJ6mUv5fFJla', 1, 'Andres', 'Roman', 'andres@gmail.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin', '$2a$10$ZuZziFrRb8c/YVR4yewAr.KDPwc11PARRU2wnKA9JCmfnqHISFbxC', 1, 'Beyda', 'Trejo', 'beyda@gmai.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1,1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2,2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2,1);