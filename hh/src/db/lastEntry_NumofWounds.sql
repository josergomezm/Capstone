use hopefullyhealing;

SELECT *
FROM Patients AS p
INNER JOIN Wounds AS w ON w.patientId = p.patientId
INNER JOIN (
	SELECT p.patientId,count(w.woundId) as NumOfWounds
	FROM Patients p 
	INNER JOIN Wounds w ON p.patientId = w.patientId
	GROUP BY p.patientId
) as q1 ON q1.patientId = p.patientId
INNER JOIN (
	SELECT p.patientId, DATE_FORMAT(lastEntry,'%M %d, %Y') as lastEntry
	FROM Patients p 
	INNER JOIN Wounds w ON p.patientId = w.patientId
	INNER JOIN (
		select patientId, max(woundDate) as lastEntry
		from wounds
		group by patientId
		) mw ON mw.lastEntry = w.woundDate
	GROUP BY p.patientId
) as q2 ON q2.patientId = p.patientId
GROUP BY p.patientId