const connection = require('./database/connection');
const path = require('path');


export const getPhotos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM PHOTOS");
    res.json(result.recordset)
}