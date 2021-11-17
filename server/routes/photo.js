const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photos_controller'))

router.get('/', (req, res) => {

})

router.get('/photo', controller.getPhotos)

router.post('/photo', controller.createPhoto)

// router.delete('/photo', controller.deletePhoto)

// router.put('/photo', controller.editPhoto)

module.exports = router;