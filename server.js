const express = require('express')
const path = require('path')
const app = express()

const port = process.env.port || 5000
app.listen(port, (err) => {
    if(err) throw err;
    console.log('Serwer is working');
})

app.get('/api/photos/1', (req, res) => {
    res.sendFile(path.join(__dirname + '/photos/1.png'))
})

app.get('/api/photos/2', (req, res) => {
    res.sendFile(path.join(__dirname + '/photos/2.png'))
})

app.get('/api/photos/3', (req, res) => {
    res.sendFile(path.join(__dirname + '/photos/3.png'))
})

app.get('/api/photos/4', (req, res) => {
    res.sendFile(path.join(__dirname + '/photos/4.png'))
})

app.get('/api/photos/5', (req, res) => {
    res.sendFile(path.join(__dirname + '/photos/5.png'))
})