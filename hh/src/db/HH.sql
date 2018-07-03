/* Part 1 */
SET FOREIGN_KEY_CHECKS=0; 
DROP TABLE IF EXISTS HopefullyHealing.Patients;
DROP TABLE IF EXISTS HopefullyHealing.Wounds;
DROP DATABASE IF EXISTS HopefullyHealing;
SET FOREIGN_KEY_CHECKS=1;

/* Part 2 */
CREATE DATABASE IF NOT EXISTS HopefullyHealing;
SET @encryption_key = 'key:ssn';


CREATE TABLE HopefullyHealing.Patients (
	`patientId` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `address` VARCHAR(1000) DEFAULT NULL,
    `city` VARCHAR(250) DEFAULT NULL,
    `state` VARCHAR(2) DEFAULT NULL,
    `zip` VARCHAR(5) DEFAULT NULL,
    `SSN` BLOB,
    `insuranceType` ENUM('Medicare', 'Medicaid', 'Private') NOT NULL,
    `insuranceName` VARCHAR(250) DEFAULT NULL,
    PRIMARY KEY (`patientId`),
	UNIQUE INDEX `patientId_UNIQUE` (`patientId` ASC)
) ENGINE=INNODB;


CREATE TABLE HopefullyHealing.Wounds (
	`woundId` INT NOT NULL AUTO_INCREMENT,
    `patientId` INT NOT NULL,
    `imagePath` VARCHAR(2000),
    `woundSize_cm` FLOAT NOT NULL,
    `woundLocation` ENUM('FRONT', 'BACK', 'RIGHT', 'LEFT') NOT NULL,
    `tissueType` ENUM('NECROTIC', 'GRANULATION', 'SLOUGH', 'EPITHELIZING') NOT NULL,
    PRIMARY KEY (`woundId`),
    UNIQUE INDEX `woundId_UNIQUE` (`woundId` ASC)
) ENGINE=INNODB;


CREATE TABLE HopefullyHealing.Visits (
	`visitId` INT NOT NULL AUTO_INCREMENT,
    `patientId` INT NOT NULL,
    `woundId` INT NOT NULL,
    `visitDate` DATETIME NOT NULL DEFAULT NOW(),
	`seenBy` VARCHAR(250) NOT NULL,
    `physcianNotes` LONGTEXT DEFAULT NULL,
    PRIMARY KEY (`visitId`),
    UNIQUE INDEX `visitId_UNIQUE` (`visitId` ASC)
) ENGINE=INNODB;

/* Part 3 */

DELIMITER | 
CREATE TRIGGER HopefullyHealing.patient_trigger BEFORE INSERT ON HopefullyHealing.Patients FOR EACH ROW
BEGIN
	SET new.SSN := AES_ENCRYPT(new.SSN, @encryption_key);
END|
DELIMITER ;

/* Part 4 */
/* Patient Table */
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"John","Doe", "3024 Vogue Ave", "Louisville", "KY", "40220", "111-11-1111", "Medicaid", "Medicaid");

SELECT patientId, SSN, CAST(AES_DECRYPT(SSN,@encryption_key) AS CHAR(1000)) AS DECRYPTED_SSN FROM HopefullyHealing.Patients;

INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Jane","Doe");
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Samantha","Marks");
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Terry","Marcus");
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Dexter","Brown");
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Martin","Stewart");
INSERT INTO HopefullyHealing.Patients VALUES (NULL,"Mary","Martha");


/* Wounds Table */
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,2,'image_path/sloughTissue-09-23-2018.jpg',8.7,'FRONT');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,2,'image_path/sloughTissue-09-25-2018.jpg',5.5,'FRONT');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,5,'image_path/sloughTissue-09-21-2018.jpg',1.3,'LEFT');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,1,'image_path/sloughTissue-09-20-2018.jpg',4.02,'BACK');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,3,'image_path/sloughTissue-09-13-2018.jpg',6.9,'LEFT');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,1,'image_path/sloughTissue-09-09-2018.jpg',8.58,'BACK');
INSERT INTO HopefullyHealing.Wounds VALUES (NULL,1,'image_path/sloughTissue-09-09-2018.jpg',8.58,'BACK');

/* Part 4 */
USE HopefullyHealing;

SELECT *
FROM Patients AS p
INNER JOIN Wounds AS w
ON p.patientId = w.patientId
WHERE LOWER(p.firstName) = LOWER('John');

