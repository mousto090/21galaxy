var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '21 | Galaxy'
  });
});

router.get('/secteurs', function (req, res, next) {
    res.render('secteurs-list', {
      title: '21 | Galaxy - secteurs'
    });
  })
  .get('/secteurs/bancaire', (req, res) => {
    res.render('secteur-bancaire', {
      title: '21 | Galaxy - secteur bancaire'
    });
  })
  .get('/secteurs/assurance', (req, res) => {
    res.render('secteur-assurance', {
      title: '21 | Galaxy - assurance'
    });
  })
  .get('/secteurs/education', (req, res) => {
    res.render('secteur-education', {
      title: '21 | Galaxy - éducation'
    });
  })
  .get('/secteurs/immobilier-et-btp', (req, res) => {
    res.render('secteur-immobilier', {
      title: '21 | Galaxy - immobilier et BTP'
    });
  })
  .get('/secteurs/energie-et-environnement', (req, res) => {
    res.render('secteur-energie', {
      title: '21 | Galaxy - énergie et environnement'
    });
  })

module.exports = router;