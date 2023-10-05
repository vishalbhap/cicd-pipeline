const express = require('express')

const app = express()
// dummy commit

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Sachin Tendulkar. CI-CD working fine with AWS From Vishal"
    })
})

app.get('/mahesh', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh"
    })
})

app.get('/mahesh/users', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh, users loaded."
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})