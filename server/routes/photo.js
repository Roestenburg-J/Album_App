const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photos_controller'))


router.get('/', (req, res) => {

})

const request = new sql.Request();

router.get('/photos', controller.getPhotos())


module.exports = router;