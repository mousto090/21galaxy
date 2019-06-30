const express = require('express');
const router = express.Router();



router.get('/accademie', function(req, res) {
    const title = 'Accademie';
    res.render('accademie/index', {
        title: `21 | Galaxy - ${title}`,
        headerTitle: title
    });
});



module.exports = router;