const express = require('express')
const router = express.Router();

router.post('/postUser', (req, res, next) => {
    const body = req.body

    console.log(body)

    res.json({
        confirmation: 'sucsess',
        data: body
    })

})

router.get('/', (req, res, next) => {
    res.send()
})

module.exports = router;