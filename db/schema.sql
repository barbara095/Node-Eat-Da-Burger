CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTO NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(35) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

