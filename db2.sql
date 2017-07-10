-- hello world db.sql;
CREATE DATABASE `CCDB`; /*!40100 DEFAULT CHARACTER SET utf8 */

-- table "banner"
CREATE TABLE `CCDB`.`Banner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `path` VARCHAR(200) NULL,  -- path of images;
  `location` INT NULL, -- 0: top 1; 1:top2; 2:bottom;
  `status` INT NULL, -- 0: offline; 1: online
  `startDate` TIMESTAMP NULL, -- Format: YYYY-MM-DD HH:MI:SS
  `endDate` TIMESTAMP NULL, -- Format: YYYY-MM-DD HH:MI:SS
  `lastModifyDate` TIMESTAMP NULL,
  `lastModifyUser` VARCHAR(45) null,

  PRIMARY KEY (`id`)
);

CREATE TABLE `CCDB`.`ICOList` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logoPath` varchar(200) NULL,
  `icoName` varchar(45) NULL,
  `progress` float(10) NULL,
  `status` INT NULL, -- 0: archived; 1: upcoming; 2: live
  `isRecommended` INT NULL, -- 0: not Recommended; 1: Recommended;
  `startDate` TIMESTAMP NULL, -- Format: YYYY-MM-DD HH:MI:SS
  `endDate` TIMESTAMP NULL, -- Format: YYYY-MM-DD HH:MI:SS
  `description` TEXT NULL,

  `lastModifyDate` TIMESTAMP NULL,
  `lastModifyUser` VARCHAR(45) null,

  PRIMARY KEY (`id`)
);

CREATE TABLE `CCDB`.`ICODetails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `icoID` INT NOT NULL,

  `icoPlatform` varchar(200) NULL,
  `icoWebSite` varchar(200) NULL,
  `icoLocation` VARCHAR(200) NULL,
  `icoTotalSupply` BIGINT NULL,
  `icoWhitePaperPath` varchar(200) NULL,
  `icoDistribution` TEXT null,
  `icoTeamMember` TEXT null,

  `lastModifyDate` TIMESTAMP NULL,
  `lastModifyUser` VARCHAR(45) null,

  PRIMARY KEY (`id`)
);

CREATE TABLE `CCDB`.`EventList` (
  `id` INT NOT NULL AUTO_INCREMENT,

  `eventName` varchar(200) null,
  `eventDate` TIMESTAMP NULL,
  `eventLocation` varchar(200) null,
  `eventURL` varchar(500) null,

  `lastModifyDate` TIMESTAMP NULL,
  `lastModifyUser` VARCHAR(45) null,

  PRIMARY KEY (`id`)
);







  