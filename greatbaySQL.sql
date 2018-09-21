DROP DATABASE IF EXISTS greatBay_DB;

CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE itemList (
	id INT auto_increment PRIMARY KEY,
	item VARCHAR(255) NOT NULL,
	initialBid INT default 1,
	highestBid INT default 1
);

 INSERT INTO itemList (item, initialBid, highestBid)
	 VALUES ("Apple", "2", "2"), ("New Laptop", "500", "500"), ('50" TV', "250", "250");

 SELECT * FROM itemList;