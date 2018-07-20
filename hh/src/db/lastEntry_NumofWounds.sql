use hopefullyhealing;


SELECT *,count(w.woundId) as NumOfWounds
FROM Patients p 
INNER JOIN Wounds w ON p.patientId = w.patientId
GROUP BY p.patientId;

SELECT *
FROM Patients p 
INNER JOIN Wounds w ON p.patientId = w.patientId
INNER JOIN (
	select patientId, max(woundDate) as lastEntry
	from wounds
	group by patientId
	) mw ON mw.lastEntry = w.woundDate
GROUP BY p.patientId
