const express = require('express')

const app = express()
// dummy commit

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hi Mahesh Nagtilak. CI-CD working fine with AWS From Vishal"
    })
})


app.listen(8080, () => {
    console.log('server running on port 8080')
})