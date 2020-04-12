-- DROP DATABASE IF EXISTS Exampledb;
-- CREATE DATABASE Exampledb;


-- CREATE DATABASE testdb;

-- ### Schema


DROP DATABASE IF EXISTS Pandemicplannerdb;
CREATE DATABASE Pandemicplannerdb;
USE Pandemicplannerdb;

CREATE TABLE pplanner
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	cabinfever BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);