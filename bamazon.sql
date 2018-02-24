-- Initiating database --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Table including list of products for sale --
CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR (225) NOT NULL,
	department_name VARCHAR (225) NOT NULL,
	price DECIMAL (10,2) NOT NULL,
	stock_quantity INT (11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kraft Blue Cheese Salad Dressing', 'Grocery', 2.99, 425),
       ('Jordache Leggings', 'Clothing', 9.99, 300),
       ('Danskin Athletic Top', 'Clothing', 12.99, 338),
       ('Shea Moisture Shampoo', 'Cosmetics', 8.99, 280),
       ('Breyers Vailla Ice Cream', 'Grocery', 3.95, 565),
       ('Maybelline Lipstick', 'Cosmetics', 2.50, 400),
       ('Oyin Handmade Conditioner', 'Cosmetics', 11.50, 354),
       ('Nabisco Chocolate Chip Cookies', 'Grocery', 2.75, 960),
       ('Faded Glory Sweater', 'Clothing', 7.50, 432),
       ('Revlon Eye Shadow', 'Cosmetics', 1.75, 185);


