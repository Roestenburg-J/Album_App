const express = require("express");
const path = require('path');

const app = express();

app.set('views', path.join(___dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(8091, () => console.log("Listening on port 8091"));