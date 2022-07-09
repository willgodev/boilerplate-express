let express = require('express');
let app = express();
let dotenv = require('dotenv').config();

console.log("Hello World");

app.get('/', (req, res) => {
//    res.send('Hello Express');
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    let message = "Hello json";

    if(process.env.MESSAGE_STYLE === "uppercase") {
        message = "HELLO JSON";
    }

    const jsonPackage = {
        "message": message
    };

    res.json(jsonPackage);
});





























 module.exports = app;
