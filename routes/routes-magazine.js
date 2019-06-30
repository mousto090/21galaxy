const express = require('express');
const router = express.Router();



router.get('/magazine', function(req, res) {
    const title = 'Magazines';
    res.render('magazine/index', {
        title: `21 | Galaxy - ${title}`,
        headerTitle: title
    });
});



module.exports = router;