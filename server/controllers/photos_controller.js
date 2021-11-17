const path = require('path');
const sql = require('mssql');
const connection = require(path.join(__dirname, '../database/connection'));

const getPhotos = async (req, res) => {
    const pool = await connection.getConnection();
    const result = await pool.request().query("SELECT * FROM PHOTO");
    res.json(result.recordset)
}

const createPhoto = async (req, res) => {

    // const { datetime, filepath, format, location, userid, takenby } = req.body;

    // if (datetime == null || filepath == null || format == null || location == null || userid == null || takenby == null) {
    //     return res.status(400).json({ msg: "Bad request, please fill in all fields" });
    // }

    const pool = await connection.getConnection();
    const result = await pool.request()
        // .input("datetime", sql.datetime, datetime)
        // .input("filepath", sql.Text, filepath)
        // .input("format", sql.Text, format)
        // .input("location", sql.Text, location)
        // .input("userid", sql.Int, userid)
        // .input("takenby", sql.Text, takenby)
        .input("datetime", sql.DateTime, Date())
        .input("filepath", sql.Text, "InputTest")
        .input("format", sql.Text, "TestFormat")
        .input("location", sql.Text, "TestLocation")
        .input("userid", sql.Int, "1")
        .input("takenby", sql.Text, "Test")
        .query(
            "INSERT INTO PHOTO (PHOTO_DATE_TIME, PHOTO_FILE_PATH, PHOTO_FORMAT, PHOTO_LOCATION, USER_ID, PHOTO_TAKEN_BY) VALUES (@datetime, @filepath, @format, @location, @userid, @takenby)"
        );

    res.json("new photo added!");


}

module.exports.getPhotos = getPhotos;
module.exports.createPhoto = createPhoto;