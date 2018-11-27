CREATE DATABASE netflix_db;
USE netflix_db;

CREATE TABLE shows (
	id INT AUTO_INCREMENT NOT NULL,
	name varchar (255) NOT NULL,
	liked BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
