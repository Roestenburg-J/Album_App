const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(8091, () => console.log("Listening on port 8091"));