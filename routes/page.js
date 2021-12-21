const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/Login', (req, res) => {
    res.render('login');
});

router.get('/Register', (req, res) => {
    res.render('register');
});

module.exports = router;