const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '3306',
  database : 'HopefullyHealing'
});
const PORT = 5000

const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
    res.send(`Hello World!`)
})

app.get('/hello', (req, res) => {
    res.send(`Hello, ${req.query.fname} ${req.query.lname}!`)
})

app.get('/python', (req, res) => {
    const PythonShell = require('python-shell');
    const pyshell = new PythonShell('./src/python/hello.py', {
        args: ["John", "Doe"]
    });
    
    pyshell.on('message', function (message) {
        // console.log(message)
        res.send(message)
    });
    
    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if(error){
            res.write(JSON.stringify(error))
            res.end()
        }
    //   console.log('The exit code was: ' + code);
    //   console.log('The exit signal was: ' + signal);
    //   console.log('finished');
    });
})
 
app.get('/data', (req,res) => {
    connection.query(`SELECT * FROM Patients AS p INNER JOIN Wounds AS w ON p.patientId = w.patientId WHERE LOWER(p.fullName) LIKE LOWER('%${req.query.fname}%')`, function (error, results, fields) {
      res.send(results)
    });
})

app.post('/data', (req, res) =>{
    var patId = req.body.patId;
    var fname = req.body.fname || 'NULL';
    var lname = req.body.lname || 'NULL';
    var imagePath = req.body.imagePath || 'NULL';
    var woundSize = req.body.woundSize || 0.0;
    var woundLocation = req.body.woundLocation || 'FRONT';

    WoundQueryString=`INSERT INTO HopefullyHealing.Wounds VALUES (NULL,${patId},'${imagePath}',${woundSize},'${woundLocation}');`
    PatientQueryString = `INSERT INTO HopefullyHealing.Patients VALUES (${patId},'${fname}','${lname}');`
    
    

    connection.query(PatientQueryString, function (error, results, fields) {
        console.log(results)
        if(error){
            res.write(JSON.stringify(error))
            res.end()

        }else{
            connection.query(WoundQueryString, function (error, results, fields) {
                if(error){
                    res.write(JSON.stringify(error))
                    res.end()
                }
                console.log(results)
                res.send('patient has been added into the database!')
            });        
        }
    });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))