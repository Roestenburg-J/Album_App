const express = require('express')
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photos_controller.js'))


router.get('/', (req, res) => {

})

const request = new sql.Request();

router.get('/photos', controller.getPhotos())


module.exports = router;