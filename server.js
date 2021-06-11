const express = require('express');
const robots = require('express-robots-txt')
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = parseInt(3000);

app.use(bodyParser.json({ extended: true }));
app.use(cors());
// app.use(robots(__dirname + '/web/robots.txt'));
app.use(express.static(__dirname + '/client/build'));

app.get('*', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/client/build/index.html');
});

var http = require('http');
var server = http.createServer(app);
server.listen(port);