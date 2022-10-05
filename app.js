const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
    console.log(req.url);
})


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'));
})
app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname,'./contact-me.html'));
})

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, './404.html'));
})

app.listen(port, () => {
    console.log(`Example server running at ${port}`)
})