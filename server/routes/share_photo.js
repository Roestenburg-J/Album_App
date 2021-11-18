const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/share_photo_controller'));

router.get('/sharePhoto/:userid', controller.getSharedPhotosByUser);

router.post('/sharePhoto/query', controller.sharePhoto);

router.delete('/sharePhoto/query', controller.unsharePhoto);

module.exports = router;