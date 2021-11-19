const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/share_album_controller'));

router.get('/shareAlbum/:userid', controller.getSharedAlbumsByUser);

router.post('/shareAlbum/query', controller.shareAlbum);

router.delete('/shareAlbum/query', controller.unshareAlbum);

module.exports = router;