-- DROP DATABASE IF EXISTS Exampledb;
-- CREATE DATABASE Exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

### Schema

CREATE DATABASE Pandemicplannerdb;
USE Pandemicplannerdb;

CREATE TABLE pplanner
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	cabin-fever BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);