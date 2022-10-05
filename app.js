const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
    console.log(req.url);
})


app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
})
app.get('/contact-me', (req, res) => {
    res.sendFile('./contact-me.html', { root: __dirname });
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname });
})

app.listen(port, () => {
    console.log(`Example server running at ${port}`)
})