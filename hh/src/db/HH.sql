/*
*   This SQL Script will create a HopefullyHealing Database, Tables within this Database and their structure.
*/

SET FOREIGN_KEY_CHECKS=0; 
    DROP TABLE IF EXISTS HopefullyHealing.Patients;
    DROP TABLE IF EXISTS HopefullyHealing.Wounds;
    DROP TABLE IF EXISTS HopefullyHealing.Visits;
    DROP DATABASE IF EXISTS HopefullyHealing;
SET FOREIGN_KEY_CHECKS=1;

CREATE DATABASE IF NOT EXISTS HopefullyHealing;
-- SET @encryption_key = 'key:ssn';

/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

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
  PRIMARY KEY (`patientId`),
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
-- Need to know what is Tissue A, B, C, D.
  `tissueA` float COLLATE UTF8_UNICODE_CI NOT NULL,
  `tissueB` float COLLATE UTF8_UNICODE_CI NOT NULL,
  `tissueC` float COLLATE UTF8_UNICODE_CI NOT NULL,
  `tissueD` float COLLATE UTF8_UNICODE_CI NOT NULL,
  PRIMARY KEY (`woundId`),
  FOREIGN KEY (`patientId`) REFERENCES HopefullyHealing.Patients (`patientId`),
  UNIQUE KEY `woundId_UNIQUE` (`woundId`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8 COLLATE=UTF8_UNICODE_CI;


-- 
--  TABLE STRUCTURE FOR: Visits
-- 
CREATE TABLE HopefullyHealing.Visits (
  `visitId` int(11) NOT NULL AUTO_INCREMENT,
  `patientId` int(11) NOT NULL,
  `woundId` int(11) NOT NULL,
  `visitDate` DATETIME NOT NULL DEFAULT current_timestamp(),
  `seenBy` VARCHAR(250) COLLATE UTF8_UNICODE_CI NOT NULL,
  `physcianNotes` longtext COLLATE UTF8_UNICODE_CI DEFAULT NULL,
  PRIMARY KEY (`visitId`),
  FOREIGN KEY (`patientId`) REFERENCES HopefullyHealing.Patients (`patientId`),
  FOREIGN KEY (`woundId`) REFERENCES HopefullyHealing.Wounds (`woundId`),
  UNIQUE KEY `visitId_UNIQUE` (`visitId`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=UTF8 COLLATE=UTF8_UNICODE_CI;

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
