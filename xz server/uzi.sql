SET NAMES UTF8 ;
DROP DATABASE IF EXISTS uzi ;
CREATE DATABASE uzi CHARSET UTF8;
USE  uzi ;
CREATE TABLE uzi_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(16),
  phone VARCHAR(16)
);
INSERT INTO uzi_user VALUES(
1001,'一只小小怪','333444','199999'
);
CREATE TABLE uzi_goods(
  gid INT PRIMARY KEY AUTO_INCREMENT ,
  gtitle VARCHAR (128),
  gmap VARCHAR(12),
  gprice DECIMAL(9,2),
  gimg VARCHAR(128)
);
INSERT INTO uzi_goods VALUES(
  1000231,"<【闲情鼓浪屿】厦门+鼓浪屿+云水谣+土楼+南普陀+曾厝垵+胡里山炮台 双飞5日无购物无自费>【金秋放价 国内游立减400】","北京",3499,null
);