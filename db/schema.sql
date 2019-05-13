CREATE DATABASE volunteers_db;
USE volunteers_db;

CREATE TABLE volunteers
(
    id int NOT NULL AUTO_INCREMENT,
	user_name varchar (255) NOT NULL,
    email varchar (255) NOT NULL,
    skill varchar (255) NOT NULL,
    user_availability varchar (255) NOT NULL,
    user_password varchar (255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE services
(
    id int AUTO_INCREMENT,
    title varchar (255),
    time_date varchar (255),
    service_des varchar (255),
    PRIMARY KEY (id)
);

