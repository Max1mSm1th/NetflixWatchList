CREATE DATABASE netflix_db;
USE netflix_db;

CREATE TABLE shows;
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	liked BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
