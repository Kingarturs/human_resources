-- Create a database on XAMPP phpmyadmin with the name hr_db ¯\_(ツ)_/¯
-- Standard config (latin1_swedish_ci)

CREATE OR REPLACE TABLE users (
	user_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(30) NOT NULL,
    email varchar(60) NOT NULL UNIQUE,
    password varchar(500) NOT NULL
);

CREATE OR REPLACE TABLE employees (
	employee_id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
    phone varchar(20) NOT NULL,
    email varchar(50) NOT NULL UNIQUE,
    address varchar(100) NOT NULL
);
