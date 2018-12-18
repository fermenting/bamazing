DROP DATABASE IF EXISTS bamazingDB;

CREATE DATABASE bamazingDB;

USE bamazingDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(9) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CSS", "Front End", 18.95, 403),
 ("Javascript", "Full Stack", 37.95, 750),
 ("jQuery", "Full Stack", 9.95, 80),
 ("Ajax", "Back End", 9.95, 143),
 ("Firebase", "Back End", 17.95, 408),
 ("HTML", "Front End", 32.95, 1531),
 ("node.js", "Back End", 14.95, 839),
 ("Constructors", "Back End", 7.95, 2265),
 ("mysql", "Back End", 72.95, 530),
 ("Agile", "Team Skills", 134.95, 86);
 

