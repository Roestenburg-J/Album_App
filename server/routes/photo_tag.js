const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photo_tag_controller'));

router.get('/photo/tag/:id', controller.getPhotoTags)

router.post('/photo/tag/:id', controller.createPhotoTag)

router.delete('/photo/tag/:id', controller.deletePhotoTag)


module.exports = router;