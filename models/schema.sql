DROP DATABASE IF EXISTS pandemic;
CREATE DATABASE pandemic;
USE pandemic;

CREATE TABLE `covid` (
  `id` Int( 100 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
