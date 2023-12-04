const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.static(path.join(__dirname)));


// Define routes
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/index-ar', (req, res) => {
    res.sendFile(__dirname + '/index-ar.html');
});

router.get('/Suggest', (req, res) => {
    res.sendFile(__dirname + '/Suggest.html');
});

router.get('/Suggest-ar', (req, res) => {
    res.sendFile(__dirname + '/Suggest-ar.html');
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

router.get('/contact-ar', (req, res) => {
    res.sendFile(__dirname + '/contact-ar.html');
});

router.get('/confirm', (req, res) => {
    res.sendFile(__dirname + '/confirm.html');
});

router.get('/confirm-ar', (req, res) => {
    res.sendFile(__dirname + '/confirm-ar.html');
});

router.get('/cat-fact', (req, res) => {
    res.sendFile(__dirname + '/cat-fact.html');
});


module.exports = router;
