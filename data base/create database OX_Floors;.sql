create database OX_Floors;
use OX_Floors;

create table registro_user(
    id int(255) auto_increment not null,
    name varchar(20) not null,
    email varchar (30) not null,
    phone varchar(15) not null,
    zip_code int(8)not null,
    created_at date not null,
constraint pk primary key (id)
)Engine=Innodb;
