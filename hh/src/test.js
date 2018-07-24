const path = require('path')
const PythonShell = require('python-shell');
const pythonPath = './src/python/get_tissue_type_percents.py' //'./src/python/hello.py';
const pyshell = new PythonShell(pythonPath, {
    args: [`--image_path=${path.join(path.join(__dirname,'images'), 'img1.jpg')}`]
});

pyshell.on('message', function (message) {
    // console.log(message)
    console.log(message)
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
    if(err){
        console.error(JSON.stringify(err))
    }
});