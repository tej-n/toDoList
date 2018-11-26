const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {

    const response = {
        '0': "working api"
    };

    res.send(response);
});

app.post('/test/', function (req, res) {
    const response = req.body;
    console.log(response);
    // console.log("\n\n****REQ****", { res }, "****");

    res.send("post");
});


app.listen(port);
console.log(`API running on port: ${port}`);