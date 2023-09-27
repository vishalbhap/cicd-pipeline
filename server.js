const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})