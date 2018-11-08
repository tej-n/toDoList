const express = require('express');

const app = express();
const port = 8080;

app.get('/', function (req, res) {

    const response = {
        '0': "working api"
    };

    res.send(response);
});

app.listen(port);
console.log(`API running on port: ${port}`);