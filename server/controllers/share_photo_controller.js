const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));

const getSharedPhotosByUser = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.params.userid)
            .query(query.getSharedPhotosByUser);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const sharePhoto = async (req, res) => {

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.query.userid)
            .input("photoid", req.query.photoid)
            .input("datetime", sql.DateTime, Date())
            .input("userfrom", req.query.userfrom)
            .query(query.sharePhoto);
        res.status(200).json("shared photo!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const unsharePhoto = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.query.userid)
            .input("photoid", req.query.photoid)
            .query(query.unsharePhoto);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports.getSharedPhotosByUser = getSharedPhotosByUser;
module.exports.sharePhoto = sharePhoto;
module.exports.unsharePhoto = unsharePhoto;