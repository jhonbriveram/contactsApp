create database contactos;
create table contactos(
    idcontacto int(6) auto_increment primary key,
    nombrecontacto varchar(45) not null,
    correo varchar(45) not null,
    telefono varchar(15)not null,
    fechanacimiento date
);

insert into contactos(nombrecontacto, correo,telefono, fechanacimiento)values(
    'Jhon Rivera','jhonbriveram@gmail.com','924871841','1994-10-13'
)
insert into contactos(nombrecontacto, correo,telefono, fechanacimiento)values(
    'Segundo Rivera','sriverad@hotmail.com','92433841','1994-10-13'
)

longblob
MySQL
ALTER TABLE contactos DROP COLUMN imagen;

	
ALTER TABLE contactos ADD imagen longblob;

alter table contactos
select * from contactos;