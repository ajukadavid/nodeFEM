const express = require('express')()

express.get('/', (req, res) => {
    console.log('hello from express')
    res.status(200)
    res.json({message: 'Hello'})
})

module.exports = express