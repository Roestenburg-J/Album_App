const { SSL_OP_NO_SSLv2 } = require('constants');
const sql = require('mssql');
const path = require('path');
const config = require(path.join(__dirname, '../config/config.js'))

const dbsettings = {
    user: config.db.username,
    password: config.db.password,
    server: config.db.server,
    database: config.db.database,
    options: config.db.options
}

async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

getConnection();
