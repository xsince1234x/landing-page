create database practica;
use practica;

create table comentarios(
    id int(255) auto_increment not null,
    email varchar(32) not null,
    text varchar(32) not null,
    constraint pk primary key (id)
)Engine=Innodb;