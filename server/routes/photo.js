const express = require('express')
const path = require('path');
const router = express.Router();
const controller = require(path.join(__dirname, '../controllers/photo_controller'));

const connection = require(path.join(__dirname, '../database/connection'));
const query = require(path.join(__dirname, '../database/query'));
const sql = require('mssql');

const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const { response } = require('express');


router.get('/photo/:userid', async (req, res) => {
    //Get all public ids of photos for a single user
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input('id', req.params.userid)
            .query(query.getUserPhotos);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});


router.post('/photo/:id', upload.single('image'), async (req, res) => {
    //post a new photo for a spesific user
    try {

    } catch (error) {
        console.log(error)

    }

    try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        const publicid = uploadResult.public_id;
        const url = uploadResult.url;
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("publicid", sql.Text, publicid)
            .input("userid", sql.Int, req.params.id)
            .input('url', sql.Text, url)
            .query(query.createPhoto);
        res.status(200).json(result);
    } catch (error) {
        res.status(500);
        res.send(error);
        console.log(error);
    }
})

router.get('/photo/url/:id', async (req, res) => {
    //get all photo urls for 1 user
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", sql.Int, req.params.id)
            .query(query.getUrl);
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error);
    }

})

router.delete('/photo/:id', controller.deletePhotoByID)

router.put('/photo/:id', controller.editPhotoByID)

module.exports = router;