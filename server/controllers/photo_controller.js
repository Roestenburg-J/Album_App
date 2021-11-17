const path = require('path');
const sql = require('mssql');
const connection = require(path.join(__dirname, '../database/connection'));

const getPhotos = async (req, res) => {
    const pool = await connection.getConnection();
    const result = await pool.request().query("SELECT * FROM PHOTO");
    res.json(result.recordset)
}

const createPhoto = async (req, res) => {

    const { pdatetime, filepath, format, location, userid, takenby } = req.body;

    if (pdatetime == null || filepath == null || format == null || location == null || userid == null || takenby == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    const pool = await connection.getConnection();
    const result = await pool.request()
        .input("datetime", sql.DateTime, Date())
        .input("filepath", sql.Text, filepath)
        .input("format", sql.Text, format)
        .input("location", sql.Text, location)
        .input("userid", sql.Int, userid)
        .input("takenby", sql.Text, takenby)
        .query(
            "INSERT INTO PHOTO (PHOTO_DATE_TIME, PHOTO_FILE_PATH, PHOTO_FORMAT, PHOTO_LOCATION, USER_ID, PHOTO_TAKEN_BY) VALUES (@datetime, @filepath, @format, @location, @userid, @takenby)"
        );

    res.status(200).json("new photo added!");

}

const getPhotoByID = async (req, res) => {
    const id = req.params;

    const pool = await connection.getConnection();
    const result = await pool.request()
        .input("id", req.params.id)
        .query("SELECT * FROM PHOTO WHERE PHOTO_ID = @id");

    res.json(result.recordset)
}

const deletePhotoByID = async (req, res) => {
    const id = req.params;

    const pool = await connection.getConnection();
    const result = await pool.request()
        .input("id", req.params.id)
        .query("DELETE FROM PHOTO WHERE PHOTO_ID = @id");

    res.json(result.rowsAffected)
}

const editPhotoByID = async (req, res) => {
    const id = req.params.id;
    const { pdatetime, filepath, format, location, userid, takenby } = req.body;

    if (pdatetime == null || filepath == null || format == null || location == null || userid == null || takenby == null) {
        return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    }

    const pool = await connection.getConnection();
    const result = await pool.request()
        .input("id", req.params.id)
        .input("datetime", sql.DateTime, Date())
        .input("filepath", sql.Text, filepath)
        .input("format", sql.Text, format)
        .input("location", sql.Text, location)
        .input("userid", sql.Int, userid)
        .input("takenby", sql.Text, takenby)
        .query(
            "UPDATE PHOTO SET PHOTO_DATE_TIME = @datetime, PHOTO_FILE_PATH = @filepath, PHOTO_FORMAT = @format, PHOTO_LOCATION = @location, USER_ID = @userid, PHOTO_TAKEN_BY = @takenby WHERE PHOTO_ID = @id"
        );

    res.status(200).json("Photo updated!");
}

module.exports.getPhotos = getPhotos;
module.exports.createPhoto = createPhoto;
module.exports.getPhotoByID = getPhotoByID;
module.exports.deletePhotoByID = deletePhotoByID;
module.exports.editPhotoByID = editPhotoByID;