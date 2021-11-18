const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/album_photo_controller'))

router.get('/albumPhoto/:albumid', controller.getAlbumPhotos);

router.post('/albumPhoto/query', controller.addPhotoToAlbum)

router.delete('/albumPhoto/query', controller.deletePhotoFromAlbum)

module.exports = router;