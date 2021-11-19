const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));
const config = require(path.join(__dirname, '../config/config.js'))
const multer = require('multer');

const getPhotos = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request().query(query.getPhotos);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const createPhoto = async (req, res) => {

    const { pdatetime, filepath, format, location, userid } = req.body;
    const upload = multer({ dest: '../userImages/' + userid })
    if (pdatetime == null || filepath == null || format == null || location == null || userid == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    upload.single('photo');

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("datetime", sql.DateTime, Date())
            .input("filepath", sql.Text, upload.path)
            .input("format", sql.Text, upload.mimetipe)
            .input("location", sql.Text, location)
            .input("userid", sql.Int, userid)
            .query(query.createPhoto);
        res.status(200).json("new photo added!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const getPhotoByID = async (req, res) => {
    const id = req.params;

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .query(query.getPhotoByID);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const deletePhotoByID = async (req, res) => {
    const id = req.params;

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .query(query.deletePhotoByID);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const editPhotoByID = async (req, res) => {
    const { pdatetime, filepath, format, location, userid, takenby } = req.body;

    if (pdatetime == null || filepath == null || format == null || location == null || userid == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .input("datetime", sql.DateTime, Date())
            .input("filepath", sql.Text, filepath)
            .input("format", sql.Text, format)
            .input("location", sql.Text, location)
            .input("userid", sql.Int, userid)
            .query(query.updatePhotoByID);

        res.status(200).json("Photo updated!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports.getPhotos = getPhotos;
module.exports.createPhoto = createPhoto;
module.exports.getPhotoByID = getPhotoByID;
module.exports.deletePhotoByID = deletePhotoByID;
module.exports.editPhotoByID = editPhotoByID;