const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));

const getAlbums = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input('id', req.params.id)
            .query(query.getAlbums);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const createAlbum = async (req, res) => {

    const { name, description, adatetime, userid } = req.body;

    if (name == null || description == null || adatetime == null || userid == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("name", sql.Text, name)
            .input("description", sql.Text, description)
            .input("adatetime", sql.DateTime, Date())
            .input("userid", sql.Int, userid)
            .query(query.createAlbum);
        res.status(200).json("new album added!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const getAlbumByID = async (req, res) => {
    const id = req.params;

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .query(query.getAlbumByID);

        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const deleteAlbumByID = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .query(query.deleteAlbumByID);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const editAlbumByID = async (req, res) => {
    const { name, description, adatetime, userid } = req.body;

    if (name == null || description == null || adatetime == null || userid == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .input("name", sql.Text, name)
            .input("description", sql.Text, description)
            .input("adatetime", sql.DateTime, Date())
            .input("userid", sql.Int, userid)
            .query(query.updateAlbumByID);

        res.status(200).json("Album updated!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}


module.exports.getAlbums = getAlbums;
module.exports.createAlbum = createAlbum;
module.exports.getAlbumByID = getAlbumByID;
module.exports.deleteAlbumByID = deleteAlbumByID;
module.exports.editAlbumByID = editAlbumByID;