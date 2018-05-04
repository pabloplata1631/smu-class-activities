drop database if exists dallas; 
create database  dallas;
use dallas;

create table colleges (
id int not null auto_increment,
school_name varchar(100) not null,
primary key (id)
);
