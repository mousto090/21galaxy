const express = require('express');
const router = express.Router();
const appRoutes = require('.');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: '21 | Galaxy'
    });
});


router.use([
    appRoutes.secteursRoutes,
    appRoutes.discoverRoutes,
    appRoutes.expertisesRoutes,
    appRoutes.contactRoutes,
    appRoutes.magazineRoutes,
    appRoutes.accademieRoutes,
    appRoutes.policiesRoutes,
    appRoutes.polesRoutes,
]);


module.exports = router;