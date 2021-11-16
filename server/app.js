const express = require("express");
const path = require('path');
const connection = require('./database/connection');
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello World");
    connection.getConnection();
});

app.get('/home', (req, res, next) => {

    res.render('home', null)

})

app.get('/login', (req, res) => {
    res.render('login', null)
})

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login');
const photoRouter = require('./routes/photo')

app.use('/', loginRouter)

app.use('/', indexRouter)

app.use('/', photoRouter)

app.listen(8091, () => console.log("Listening on port 8091"));