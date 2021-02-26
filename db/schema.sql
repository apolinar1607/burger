-- Schema for burgers_db 
DROP DATABASE IF EXISTS burgers_db;

-- Create database department
CREATE DATABASE burgers_db;

-- Use created database to create table
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
