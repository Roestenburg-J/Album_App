const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photo_controller'));

router.get('/photo/:id', controller.getPhotos)

router.post('/photo', controller.createPhoto)

// router.get('/photo/:id', controller.getPhotoByID)

router.delete('/photo/:id', controller.deletePhotoByID)

//router.put('/photo/:id', controller.editPhotoByID)

module.exports = router;