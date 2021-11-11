const express = require('express')
const router = express.Router();

router.post('/postUser', (req, res, next) => {
    const body = req.body

    res.json({
        confirmation: 'sucsess',
        data: body
    })

})

module.exports = router;