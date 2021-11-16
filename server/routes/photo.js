const express = require('express')
const router = express.Router();
const mssql = require('mssql');

router.get('/', (req, res) => {
    const pool = new sql.ConnectionPool({
        user: config.db.user,
        password: config.db.password,
        server: config.db.server,
        database: config.db.database
    })

    pool.connect(err => {
        console.log(err);
    })
})

const request = new sql.Request();

router.get('/photo', (req, res) => {
    request.query('select 1 as a number', (err, result) => {
        console.log(result.recordset[0].number);
    })
})


module.exports = router;