const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/album_controller'))

router.get('/', (req, res) => {

})

router.get('/album', controller.getAlbums)

router.post('/album', controller.createAlbum)

router.get('/album/:id', controller.getAlbumByID)

router.delete('/album/:id', controller.deleteAlbumByID)

router.put('/album/:id', controller.editAlbumByID)

module.exports = router;