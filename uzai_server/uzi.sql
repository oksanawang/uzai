SET NAMES UTF8 ;
DROP DATABASE IF EXISTS uzi ;
CREATE DATABASE uzi CHARSET UTF8;
USE  uzi ;
CREATE TABLE uzi_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(11),
  upwd VARCHAR(16),
  phone VARCHAR(11)
);
INSERT INTO uzi_user VALUES(
1001,'一只小小怪','333444','199999'
);