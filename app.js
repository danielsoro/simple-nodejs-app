const express = require('express')
const util = require('util')
const app = express()

app.get('/:test', function (req, res) {
    let req_log = `REQUEST_LOG => METHOD: ${JSON.stringify(req.method)}, URL: ${JSON.stringify(req.url)}, HEADERS: ${JSON.stringify(req.headers)}, PATH: ${req.params.test}`
    console.dir(req_log, {depth: null, colors: true});
    
    res.send('ok');
})


app.post('/:test', function (req, res) {
    let req_log = `REQUEST_LOG => METHOD: ${JSON.stringify(req.method)}, 
    URL: ${JSON.stringify(req.url)}, 
    HEADERS: ${JSON.stringify(req.headers)}, 
    PATH: ${req.params.test}, 
    BODY ${req.body}`

    console.dir(req_log, {depth: null, colors: true});
    
    res.send('{ok');
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})