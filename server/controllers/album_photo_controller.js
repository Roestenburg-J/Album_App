const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));

const getAlbumPhotos = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("albumid", req.params.albumid)
            .query(query.getAlbumPhotos);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const addPhotoToAlbum = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("albumid", req.query.albumid)
            .input("photoid", req.query.photoid)
            .query(query.addPhotoToAlbum);
        res.status(200).json("new photo added to album!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const deletePhotoFromAlbum = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("albumid", req.query.albumid)
            .input("photoid", req.query.photoid)
            .query(query.deletePhotoFromAlbum);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports.getAlbumPhotos = getAlbumPhotos;
module.exports.addPhotoToAlbum = addPhotoToAlbum;
module.exports.deletePhotoFromAlbum = deletePhotoFromAlbum;