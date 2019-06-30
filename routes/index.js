module.exports = {
    secteursRoutes: require('./routes-secteurs'),
    discoverRoutes: require('./routes-decouvrir'),
    expertisesRoutes: require('./routes-expertises'),
    contactRoutes: require('./routes-contact'),
    magazineRoutes: require('./routes-magazine'),
    accademieRoutes: require('./routes-accademie'),
    policiesRoutes: require('./routes-policies'),
    polesRoutes: require('./routes-poles'),
};


// var express = require('express');
// var router = express.Router();



// /* GET home page. */
// router.get('/', function (req, res) {
//     res.render('index', {
//         title: '21 | Galaxy'
//     });
// });

// router.get('/secteurs', function (req, res) {
//     res.render('secteurs-list', {
//         title: '21 | Galaxy - secteurs'
//     });
// }).get('/secteurs/bancaire', (req, res) => {
//     res.render('secteur-bancaire', {
//         title: '21 | Galaxy - secteur bancaire'
//     });
// }).get('/secteurs/assurance', (req, res) => {
//     res.render('secteur-assurance', {
//         title: '21 | Galaxy - assurance'
//     });
// }).get('/secteurs/education', (req, res) => {
//     res.render('secteur-education', {
//         title: '21 | Galaxy - éducation'
//     });
// }).get('/secteurs/btp-et-immobilier', (req, res) => {
//     res.render('secteur-immobilier', {
//         title: '21 | Galaxy - BTP et immobilier='
//     });
// }).get('/secteurs/energie-et-environnement', (req, res) => {
//     res.render('secteur-energie', {
//         title: '21 | Galaxy - énergie et environnement'
//     });
// });

// router.get('/contact', (req, res) => {
//     res.render('contact', {
//         title: '21 | Galaxy - contact'
//     });
// });


// module.exports = router;