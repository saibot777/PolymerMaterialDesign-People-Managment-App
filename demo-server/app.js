/**
 * Created by stefan.trajkovic on 9.3.2017..
 */
var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/../app/index.html'));
});
app.use(express.static(path.join(__dirname, '../')));
var http = require('http').Server(app);
http.listen(8080);