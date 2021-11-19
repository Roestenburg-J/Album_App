const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));

const getSharedAlbumsByUser = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.params.userid)
            .query(query.getSharedAlbumsByUser);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const shareAlbum = async (req, res) => {

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.query.userid)
            .input("albumid", req.query.albumid)
            .input("datetime", sql.DateTime, Date())
            .input("userfrom", req.query.userfrom)
            .query(query.shareAlbum);
        res.status(200).json("shared album!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const unshareAlbum = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("userid", req.query.userid)
            .input("albumid", req.query.albumid)
            .query(query.unshareAlbum);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports.getSharedAlbumsByUser = getSharedAlbumsByUser;
module.exports.shareAlbum = shareAlbum;
module.exports.unshareAlbum = unshareAlbum;