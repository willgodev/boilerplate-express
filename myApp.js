let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {
//    res.send('Hello Express');
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.use('/public', express.static(__dirname + '/public'));
































 module.exports = app;
