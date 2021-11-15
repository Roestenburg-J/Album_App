const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/home', (req, res, next) => {

    res.render('home', null)

})

app.get('/login', (req, res) => {
    res.render('login', null)
})

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')

app.use('/', loginRouter)

app.use('/', indexRouter)

app.listen(8091, () => console.log("Listening on port 8091"));