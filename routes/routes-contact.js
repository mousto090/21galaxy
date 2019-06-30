const express = require('express');
const router = express.Router();



router.get('/contact', function(req, res) {
    res.render('contact/index', {
        title: '21 | Galaxy - Nous contacter'
    });
});



module.exports = router;