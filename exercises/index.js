const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index-ar', (req, res) => {
    res.sendFile(__dirname + '/index-ar.html');
});

app.get('/Suggest', (req, res) => {
    res.sendFile(__dirname + '/Suggest.html');
});

app.get('/Suggest-ar', (req, res) => {
    res.sendFile(__dirname + '/Suggest-ar.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/contact-ar', (req, res) => {
    res.sendFile(__dirname + '/contact-ar.html');
});

app.get('/confirm', (req, res) => {
    res.sendFile(__dirname + '/confirm.html');
});

app.get('/confirm-ar', (req, res) => {
    res.sendFile(__dirname + '/confirm-ar.html');
});

app.get('/cat-fact', (req, res) => {
    res.sendFile(__dirname + '/cat-fact.html');
});


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
