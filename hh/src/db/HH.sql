/*
*   This SQL Script will create a HopefullyHealing Database, Tables within this Database and their structure.
*/

SET FOREIGN_KEY_CHECKS=0; 
    DROP TABLE IF EXISTS HopefullyHealing.Locations;
    DROP TABLE IF EXISTS HopefullyHealing.Patients;
    DROP TABLE IF EXISTS HopefullyHealing.Wounds;
    DROP DATABASE IF EXISTS HopefullyHealing;
SET FOREIGN_KEY_CHECKS=1;

CREATE DATABASE IF NOT EXISTS HopefullyHealing;
-- SET @encryption_key = 'key:ssn';

/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

-- 
--  TABLE STRUCTURE FOR: Locations Table
-- 
CREATE TABLE HopefullyHealing.Locations (
  `locationId` int(11) NOT NULL AUTO_INCREMENT,
  `locationName` VARCHAR(250) COLLATE UTF8_UNICODE_CI NOT NULL,
  PRIMARY KEY (`locationId`),
  UNIQUE KEY `locationId_UNIQUE` (`locationId`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=UTF8 COLLATE=UTF8_UNICODE_CI;

INSERT INTO HopefullyHealing.Locations VALUES (1,'Hopefully Healing Hospice Center');
INSERT INTO HopefullyHealing.Locations VALUES (2,'Hopefully Healing Intense Care Center');
INSERT INTO HopefullyHealing.Locations VALUES (3,'Hopefully Healing Home Care');
INSERT INTO HopefullyHealing.Locations VALUES (4,'Signature Health of Fort Knox');
INSERT INTO HopefullyHealing.Locations VALUES (5,'Rehab and Wellness Center');
INSERT INTO HopefullyHealing.Locations VALUES (6,'Signature Health of Fort Lauterdale');
INSERT INTO HopefullyHealing.Locations VALUES (7,'Regency Wellness Center');


-- 
--  TABLE STRUCTURE FOR: Patients
-- 
CREATE TABLE HopefullyHealing.Patients (
  `patientId` INT(11) NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(1000) COLLATE UTF8_UNICODE_CI NOT NULL,
  `phoneNumber` VARCHAR(50) COLLATE UTF8_UNICODE_CI NOT NULL,
  `streetAddress` VARCHAR(1000) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  `city` VARCHAR(250) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  `state` VARCHAR(2) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  `zip` VARCHAR(5) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  `SSN` BLOB DEFAULT NULL,
  `insuranceType` ENUM('Medicare','Medicaid','Private') COLLATE UTF8_UNICODE_CI NOT NULL,
  `insuranceName` ENUM('Passport Health Group','Unitedhealth Group','Wellpoint Inc. Group','Kaiser Foundation Group','Humana Group','Aetna Group','HCSC Group','Cigna Health Group','Highmark Group') COLLATE UTF8_UNICODE_CI,
  `locationId` INT(11) NOT NULL,
  PRIMARY KEY (`patientId`),
  FOREIGN KEY (`locationId`) REFERENCES HopefullyHealing.Locations (`locationId`),
  UNIQUE KEY `patientId_UNIQUE` (`patientId`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=UTF8 COLLATE=UTF8_UNICODE_CI;

-- 
-- TABLE STRUCTURE FOR: Wounds
-- 
CREATE TABLE HopefullyHealing.Wounds (
  `woundId` int(11) NOT NULL AUTO_INCREMENT,
  `patientId` int(11) NOT NULL,
  `imagePath` VARCHAR(2000) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  `woundSize_cm` float NOT NULL,
  `woundView` ENUM('FRONT','BACK','RIGHT','LEFT') COLLATE UTF8_UNICODE_CI NOT NULL,
  `woundLocation` ENUM('Head (Front)', 'Right Shoulder (Front)', 'Chest', 'Left Shoulder (Front)', 'Right Arm (Front)', 'Abdomen', 'Left Arm (Front)', 'Right Hand (Front)', 'Pelvis (Front)', 'Left Hand (Front)', 'Right Leg (Front)', 'Left Leg (Front)', 'Right Crus', 'Left Crus', 'Right Foot (Front)', 'Left Foot (Front)', 'Head (Back)', 'Left Shoulder (Back)', 'Back', 'Right Shoulder (Back)', 'Left Arm (Back)', 'Lower Back', 'Right Arm (Back)', 'Left Hand (Back)', 'Gluteus', 'Right Hand (Back)', 'Left Leg (Back)', 'Right Leg (Back)', 'Left Calf', 'Right Calg', 'Left Foot (Back)', 'Right Foot (Back)', 'Head (Right Side)', 'Right Shoulder (Side)', 'Right Arm (Side)', 'Pelvis (Right Side)', 'Right Leg (Side)', 'Right Fibula (Side)', 'Right Foot (Side)', 'Head (Left Side)', 'Left Shoulder (Side)', 'Left Arm (Side)', 'Pelvis (Left Side)', 'Left Leg (Side)', 'Left Fibula (Side)', 'Left Foot (Side)') COLLATE UTF8_UNICODE_CI NOT NULL,
  `woundDate` DATETIME NOT NULL DEFAULT current_timestamp(),
-- Need to know what is Tissue A, B, C, D.
  `tissueA` float COLLATE UTF8_UNICODE_CI DEFAULT NULL, -- NOT NULL,
  `tissueB` float COLLATE UTF8_UNICODE_CI DEFAULT NULL, -- NOT NULL,
  `tissueC` float COLLATE UTF8_UNICODE_CI DEFAULT NULL, -- NOT NULL,
  `tissueD` float COLLATE UTF8_UNICODE_CI DEFAULT NULL, -- NOT NULL,
  PRIMARY KEY (`woundId`),
  FOREIGN KEY (`patientId`) REFERENCES HopefullyHealing.Patients (`patientId`),
  UNIQUE KEY `woundId_UNIQUE` (`woundId`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8 COLLATE=UTF8_UNICODE_CI;

/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
DELIMITER | 
CREATE TRIGGER HopefullyHealing.patient_trigger BEFORE INSERT ON HopefullyHealing.Patients FOR EACH ROW
BEGIN
	SET new.SSN := AES_ENCRYPT(new.SSN, @encryption_key);
END|
DELIMITER ;
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
