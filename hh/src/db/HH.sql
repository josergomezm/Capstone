/* Part 1 */
SET FOREIGN_KEY_CHECKS=0; 
DROP TABLE IF EXISTS HopefullyHealing.Patients;
DROP TABLE IF EXISTS HopefullyHealing.Wounds;
DROP DATABASE IF EXISTS HopefullyHealing;
SET FOREIGN_KEY_CHECKS=1;

/* Part 2 */
CREATE DATABASE IF NOT EXISTS HopefullyHealing;

CREATE TABLE HopefullyHealing.Patients (
	`patientId` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`patientId`)
) ENGINE=INNODB;


CREATE TABLE HopefullyHealing.Wounds (
	`woundId` INT NOT NULL AUTO_INCREMENT,
    `patientId` INT NOT NULL,
    `imagePath` VARCHAR(2000),
    `woundSize_cm` FLOAT NOT NULL,
    `woundLocation` ENUM('FRONT', 'BACK', 'RIGHT', 'LEFT') NOT NULL,
    PRIMARY KEY (`woundId`)
) ENGINE=INNODB;

/* Part 3 */
/* Patient Table */
INSERT INTO HopefullyHealing.Patients VALUES (1,"John","Doe");
INSERT INTO HopefullyHealing.Patients VALUES (2,"Jane","Doe");
INSERT INTO HopefullyHealing.Patients VALUES (3,"Samantha","Lexington");
INSERT INTO HopefullyHealing.Patients VALUES (4,"Terry","Marcus");
INSERT INTO HopefullyHealing.Patients VALUES (5,"Dexter","Brown");


/* Wounds Table */
INSERT INTO HopefullyHealing.Wounds VALUES (1,2,'image_path/sloughTissue-09-23-2018.jpg',8.7,'FRONT');
INSERT INTO HopefullyHealing.Wounds VALUES (2,2,'image_path/sloughTissue-09-25-2018.jpg',5.5,'FRONT');
INSERT INTO HopefullyHealing.Wounds VALUES (3,5,'image_path/sloughTissue-09-21-2018.jpg',1.3,'LEFT');
INSERT INTO HopefullyHealing.Wounds VALUES (4,1,'image_path/sloughTissue-09-20-2018.jpg',4.02,'BACK');
INSERT INTO HopefullyHealing.Wounds VALUES (5,3,'image_path/sloughTissue-09-13-2018.jpg',6.9,'LEFT');
INSERT INTO HopefullyHealing.Wounds VALUES (6,1,'image_path/sloughTissue-09-09-2018.jpg',8.58,'BACK');

INSERT INTO HopefullyHealing.Wounds VALUES (NULL,1,'image_path/sloughTissue-09-09-2018.jpg',8.58,'BACK');

/* Part 4 */
USE HopefullyHealing;

SELECT *
FROM Patients AS p
INNER JOIN Wounds AS w
ON p.patientId = w.patientId
WHERE LOWER(p.firstName) = LOWER('John');

