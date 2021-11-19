const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
const connection = require('./database/connection');
const cors = require("cors");
const app = express();

app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
const albumRouter = require('./routes/album')
const photoTagRouter = require('./routes/photo_tag')
const albumPhotoRouter = require('./routes/album_photo');
const sharePhotoRouter = require('./routes/share_photo');
const shareAlbumRouter = require('./routes/share_album');

app.use('/', loginRouter)

app.use('/', indexRouter)

app.use('/', photoRouter)

app.use('/', albumRouter)

app.use('/', photoTagRouter)

app.use('/', albumPhotoRouter)

app.use('/', sharePhotoRouter)

app.use('/', shareAlbumRouter)

app.listen(8091, () => console.log("Listening on port 8091"));