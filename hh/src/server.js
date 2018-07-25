const express = require('express')
const path = require('path')
const os = require('os')
const fs = require('fs')
const bodyParser = require('body-parser');
const mysql = require('mysql')
const connection = mysql.createConnection({
  multipleStatements: true,
  host     : os.hostname,
  user     : 'root',
  password : 'root',
  port     : '3306',
  database : 'HopefullyHealing'
});
const PORT = 5000

const app = express()
app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // support encoded bodies

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// ------------------------------------------------------------------------------------------- GET --------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send(`Hopefully Healing Says: Hello World!`)
})

app.get('/hello', (req, res) => {
    res.send(`Hello, ${req.query.fname} ${req.query.lname}!`)
})

app.get('/python', (req, res) => {
    const PythonShell = require('python-shell');
    const pythonPath = './python/hello.py' //'./src/python/hello.py';
    const pyshell = new PythonShell(pythonPath, {
        args: ["John", "Doe"]
    });
    
    pyshell.on('message', function (message) {
        // console.log(message)
        res.send(message)
    });
    
    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if(err){
            res.write(JSON.stringify(err))
            res.end()
        }
    //   console.log('The exit code was: ' + code);
    //   console.log('The exit signal was: ' + signal);
    //   console.log('finished');
    });
})

// ----------------------------------------- ML MODEL PREDICTIONS GETTER ---------------------------------------
app.get('/pythonGetPredictions', (req, res) => {
    const PythonShell = require('python-shell');
    const pythonPath = './python/get_tissue_type_percents.py' //'./src/python/hello.py';
    const pyshell = new PythonShell(pythonPath, {
        mode: 'json',
        args: [`--image_path=${path.join(path.join(__dirname,'images'), req.query.imagePath)}`]
    });
    
    pyshell.on('message', function (message) {
        // console.log(message)
        res.send(message)
    });
    
    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if(err){
            res.write(JSON.stringify(err))
            res.end()
        }
    });
})
// ml model predictions getter ned ------------------------------------------------------------------------


app.get('/data', (req,res) => {
    connection.query(`SELECT * FROM Patients AS p INNER JOIN Wounds AS w ON p.patientId = w.patientId WHERE LOWER(p.fullName) LIKE LOWER('%${req.query.fname}%')`, function (error, results, fields) {
      res.send(results)
    });
})

app.get('/dataPatientStatus', (req,res) => {
    var patId = req.query.patId;
    connection.query(`SELECT *
    FROM Patients AS p
    INNER JOIN Wounds AS w ON w.patientId = p.patientId
    INNER JOIN (
        SELECT p.patientId,count(w.woundId) as NumOfWounds
        FROM Patients p 
        INNER JOIN Wounds w ON p.patientId = w.patientId
        GROUP BY p.patientId
    ) as q1 ON q1.patientId = p.patientId
    INNER JOIN (
        SELECT p.patientId, DATE_FORMAT(lastEntry,'%M %d, %Y') as lastEntry, woundId as lastImage
        FROM Patients p 
        INNER JOIN Wounds w ON p.patientId = w.patientId
        INNER JOIN (
            select patientId, max(woundDate) as lastEntry
            from wounds
            group by patientId
            ) mw ON mw.lastEntry = w.woundDate
        GROUP BY p.patientId
    ) as q2 ON q2.patientId = p.patientId
    WHERE p.patientId = ${patId}
    GROUP BY p.patientId;
    SELECT *
    FROM Wounds
    WHERE patientId = ${patId};
    `, function (error, results, fields) {
        // var b64Data = decodeBase64Image(results[0].imageData)
        results[0][0].imageData = results[1][results[1].length - 1].imageData.toString('base64');
        results[0][0].woundLocation = results[1][results[1].length - 1].woundLocation;
        results[0][0].woundSize_cm = results[1][results[1].length - 1].woundSize_cm;
        results[0][0].woundView = results[1][results[1].length - 1].woundView;
        res.send(results)
    });
})

app.get('/dataUpdatePatientGetWounds', (req,res) => {
    var patId = req.query.patId;
    connection.query(`SELECT woundId, woundLocation
    FROM Wounds 
    WHERE patientId = ${patId}`, function (error, results, fields) {
      res.send(results)
    });
})

app.get('/dataLocations', (req,res) => {
    const restrictedLocation = (req.query.restrictedLocation == 'true')
    var PatientQueryString = `SELECT * FROM Locations WHERE restrictedLocation = 0`
    if (restrictedLocation){
        PatientQueryString = `SELECT * FROM Locations`
    }

    connection.query(PatientQueryString, function (error, results, fields) {
      res.send(results)
    });
})

// ----------------------------------------- ALL PATIENTS GETTER ---------------------------------------
app.get('/dataAllPatients', (req,res) => {
    // connection.query(`SELECT * FROM Patients p INNER JOIN Wounds w ON p.patientId = w.patientId`, function (error, results, fields) {
    connection.query(`SELECT *
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
    GROUP BY p.patientId`, function (error, results, fields) {
        res.send(results)
    });
})
// all patients getter end -----------------------------------------------------------------------------------------

// ----------------------------------------- PATIENT FROM LOCATION GETTER ---------------------------------------
app.get('/dataPatientInLocations', (req,res) => {
    connection.query(`SELECT *
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
    WHERE locationId = ${req.query.locationId}
    GROUP BY p.patientId`, function (error, results, fields) {
        res.send(results)
    });
})
// patient from location getter end ----------------------------------------------------------------------

// ----------------------------------------- LOCATIONS GETTER ---------------------------------------
app.get('/dataAllLocations', (req,res) => {
    connection.query(`SELECT * FROM Locations`, function (error, results, fields) {
      res.send(results)
    });
})
// locations getter end -----------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------- POST --------------------------------------------------------------------------------------------

// ----------------------------------------- ADD NEW LOCATION ---------------------------------------
app.post('/dataLocations', (req,res) => {
    var locationId = req.body.locationId;
    var locationName = req.body.locationName;
    var restrictedLocation = req.body.restrictedLocation;

    const LocationQueryString = `INSERT INTO HopefullyHealing.Locations VALUES (${locationId},'${locationName}',${restrictedLocation});`

    connection.query(LocationQueryString, function (error, results, fields) {
        console.log(results)
        if(error){
            res.write(JSON.stringify(error))
            res.end()
        }else{
            res.send('location has been added into the database!')      
        }
    });
})
// ADD NEW LOCATION end ----------------------------------------------------------------------------

// ----------------------------------------- UPDATE PATIENT ---------------------------------------
app.post('/updatePatientWound', (req,res) => {
    var patId = req.body.patId;
    var imagePath = req.body.imagePath || 'NULL';
    var imageData = decodeBase64Image(req.body.imageData).data || 'NULL';
    var woundSize = req.body.woundSize || 0.0;
    var woundView = req.body.woundView || 'FRONT';
    var woundLocation = req.body.woundLocation || 'Head (Front)';
    var woundDate = req.body.woundDate;
    // //Get image
    var tmp_path = path.join(path.join(__dirname,'images'),'temp_image.png')
    fs.writeFile(tmp_path, imageData, function(error){
        if(error){
            res.write(JSON.stringify(error))
            res.end()
        }else{
            //Execute Python code here first
            const PythonShell = require('python-shell');
            const pythonPath = './python/get_tissue_type_percents.py' //'./src/python/hello.py';
            const pyshell = new PythonShell(pythonPath, {
                mode: 'json',
                args: [`--image_path=${tmp_path}`]
            });
            
            pyshell.on('message', function (message) {
                console.log(message)
                // message....
                const WoundQueryString = "INSERT INTO HopefullyHealing.Wounds SET ?", 
                    woundValues = {
                    patientId: patId,
                    imagePath: imagePath,
                    imageData: imageData,
                    woundSize_cm: woundSize,
                    woundView: woundView,
                    woundLocation: woundLocation,
                    woundDate: woundDate,
                    tissueB: message[1].Granulation,
                    tissueC: message[1].Slough,
                    tissueD: message[1].Necrotic
                }
                connection.query(WoundQueryString, woundValues, function (error, results, fields) {
                    console.log(results)
                    if(error){
                        res.write(JSON.stringify(error))
                        res.end()
                    }else{
                        res.send('patient has been updated into the database!')
                    }
                });
                
            })
        }
    })
})
// updatepatient end ---------------------------------------------------------------------------------

// ----------------------------------------- ADDING NEW PATIENT ---------------------------------------
app.post('/data', (req, res) =>{
    var patId = req.body.patId;
    var patName = req.body.patName || 'NULL';
    var patPhone = req.body.patPhone || 'NULL';
    var patAddress = req.body.patAddress || 'NULL';
    var patCity = req.body.patCity || 'NULL';
    var patState = req.body.patState || 'NULL';
    var patZip = req.body.patZip || 'NULL';
    var patSSN = req.body.patSSN || 'NULL';
    var patIType = req.body.patIType || 'NULL';
    var patIName = req.body.patIName || 'NULL';
    var imagePath = req.body.imagePath || 'NULL';
    var imageData = decodeBase64Image(req.body.imageData).data || 'NULL';
    var woundSize = req.body.woundSize || 0.0;
    var woundView = req.body.woundView || 'FRONT';
    var woundLocation = req.body.woundLocation || 'Head (Front)';
    var locationId = req.body.locationId || 1;
    var woundDate = req.body.woundDate;

    // Get image
    var tmp_path = path.join(path.join(__dirname,'images'),'temp_image.png')
    fs.writeFile(tmp_path, imageData, function(error){
        if(error){
            res.write(JSON.stringify(error))
            res.end()
        }else{
            //Execute Python code here first
            const PythonShell = require('python-shell');
            const pythonPath = './python/get_tissue_type_percents.py' //'./src/python/hello.py';
            const pyshell = new PythonShell(pythonPath, {
                mode: 'json',
                args: [`--image_path=${tmp_path}`]
            });
            
            pyshell.on('message', function (message) {
                console.log(message)
                // message....

                const PatientQueryString = `INSERT INTO HopefullyHealing.Patients VALUES (${patId},'${patName}','${patPhone}','${patAddress}','${patCity}','${patState}','${patZip}','${patSSN}','${patIType}','${patIName}', ${locationId});`
                const WoundQueryString = "INSERT INTO HopefullyHealing.Wounds SET ?", 
                woundValues = {
                    patientId: patId,
                    imagePath: imagePath,
                    imageData: imageData,
                    woundSize_cm: woundSize,
                    woundView: woundView,
                    woundLocation: woundLocation,
                    woundDate: woundDate,
                    tissueB: message[1].Granulation,
                    tissueC: message[1].Slough,
                    tissueD: message[1].Necrotic
                }
        
                connection.query(PatientQueryString, function (error, results, fields) {
                    // console.log(results)
                    if(error){
                        res.write(JSON.stringify(error))
                        res.end()
                    }else{
                        // res.send('patient has been added into the database!')      
                        connection.query(WoundQueryString, woundValues, function (error, results, fields) {
                            if(error){
                                res.write(JSON.stringify(error))
                                res.end()
                            }else{
                                // console.log(woundValues.imageData.toString('base64'))
                                // console.log(results)

                                // Delete Temp Image
                                fs.unlink(tmp_path)
                                // Send res
                                res.send('patient has been added into the database!')
                            }
                        });  
                    }
                });
            });
            
            // end the input stream and allow the process to exit
            pyshell.end(function (err,code,signal) {
                if(err){
                    res.write(JSON.stringify(err))
                    res.end()
                }
            });
        }
    });
})
// add new patient end ----------------------------------------------------------------------------------------------------

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

// ------------------------- DECODE BASE64 IMG fuction ---------------------------------------
function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
  
    return response;
}