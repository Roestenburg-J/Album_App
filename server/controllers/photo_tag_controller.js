const path = require('path');
const sql = require('mssql');
const query = require(path.join(__dirname, '../database/query'))
const connection = require(path.join(__dirname, '../database/connection'));

const getPhotoTags = async (req, res) => {
    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .query(query.getPhotoTags);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const createPhotoTag = async (req, res) => {
    const { photoid, tag } = req.body;

    if (photoid == null || tag == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("photoid", sql.Int, photoid)
            .input("tag", sql.Text, tag)
            .query(query.createPhotoTag);
        res.status(200).json("new tag added!");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const deletePhotoTag = async (req, res) => {
    const id = req.params;
    const { tag } = req.body;

    if (tag == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    try {
        const pool = await connection.getConnection();
        const result = await pool.request()
            .input("id", req.params.id)
            .input("tag", sql.VarChar, tag)
            .query(query.deletePhotoTag);
        res.json(result.rowsAffected)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports.getPhotoTags = getPhotoTags;
module.exports.createPhotoTag = createPhotoTag;
module.exports.deletePhotoTag = deletePhotoTag;