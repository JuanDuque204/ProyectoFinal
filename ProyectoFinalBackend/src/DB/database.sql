create database JuWeYe;
use JuWeYe;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(50), 
    apellido varchar(50), 
    email VARCHAR(100), 
    contrase varchar(50)
);

create table venta (
    id_venta int auto_increment primary key,
    id_usuario int, 
    foreign key(id_usuario) references usuario(id_usuario)
);

create table producto(
    id_producto int primary key, 
    nombre varchar(50), 
    descripcion text, 
    precio decimal(10, 2), 
    ruta_imagen varchar(255), 
    cantidad_existente int
);

create table detalle_venta(
    id_detalle_venta int auto_increment primary key, 
    id_producto int, 
    id_venta int, 
    cantidad_producto int, 
    foreign key(id_producto) references producto(id_producto), 
    foreign key(id_venta) references venta(id_venta)
);

INSERT INTO usuario (nombre, apellido, email, contrase) VALUES
('Juan', 'Pérez', 'juan@example.com', '123456'), 
('María', 'Gómez', 'maria@example.com', 'abcdef'), 
('Pedro', 'López', 'pedro@example.com', 'qwerty');