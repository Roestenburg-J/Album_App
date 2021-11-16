const path = require('path');
const connection = require(path.join(__dirname, '../database/connection'));

const getPhotos = async (req, res) => {
    const pool = await connection.getConnection();
    const result = await pool.request().query("SELECT * FROM PHOTO");
    res.json(result.recordset)
}

module.exports.getPhotos = getPhotos;