var express = require('express');

var app = express();

app.get('/', function (req, res) {

    const response = {
        '0': "working api"
    };

    res.send(response);
});

app.listen(3000);
console.log("API running on port: 3000");