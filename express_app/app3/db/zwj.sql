/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.6.34-log : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`city`,`age`) values (1,'张三','南京',30),(2,'李四','上海',25),(3,'王五','北京',32);

/*Table structure for table `user_ajax` */

DROP TABLE IF EXISTS `user_ajax`;

CREATE TABLE `user_ajax` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `qq` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `user_ajax` */

insert  into `user_ajax`(`id`,`qq`,`email`,`address`) values (1,1234554,'23242542@qq.com','北京石景山'),(2,1231244,'2342342@qq.com','北京市朝阳区'),(3,23465,'34534243@qq.com','南京市地方上'),(4,232453,'2235@qq.com','上海东乡区');

/*Table structure for table `user_login` */

DROP TABLE IF EXISTS `user_login`;

CREATE TABLE `user_login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `qq` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `user_login` */

insert  into `user_login`(`id`,`name`,`password`,`email`,`qq`,`address`) values (1,'chenyuanguang','c12345','12432423@qq.com',121312213,'北京朝阳区'),(2,'chenyuang','a12345','3131244@qq.com',1231242,'beijingshi'),(3,'chenss','a12345','3r332@qq.com',242432,'sfsafasfa'),(4,'chenes','a12345','34235@qq.com',24232353,'sfsagsagsa'),(5,'cheness','a12345','3423325@qq.com',4324234,'nanjingshi'),(6,'liyang','a12345','23424@qq.com',4234252,'ashfsof'),(7,'chensheng','a12345','23432532@qq.com',224234,'sdfasfa'),(8,'dasheng','a12345','234235@qq.com',423553,'beijing'),(9,'dashengs','a12345','34255256@qq.com',43254654,'sfsaggdsg'),(10,'lichen','a12345','837990335@qq.com',3243244,'sfasfasf');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
