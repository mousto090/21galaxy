const express = require('express');
const router = express.Router();

const menu = {
    'en-france': { title: 'En France', view: 'en-france' },
    'a-l-international': { title: "A l'international", view: 'a-l-international' },
    'nos-equipes': { title: 'Nos équipes', view: 'nos-equipes' },
    'nos-valeurs': { title: 'Nos valeurs', view: 'nos-valeurs' },
    'nous-rejoindre': { title: 'Nous rejoindre', view: 'nous-rejoindre' },
};

router.get('/decouvrir-21-galaxy/', function(req, res) {
    const title = 'Découvrir';
    res.render('decouvrir/index', {
        title: `21 | Galaxy - ${title}`,
        headerTitle: title
    });
});

router.get('/decouvrir-21-galaxy/:path', function(req, res, next) {
    var path = (req.params['path'] || '').trim();
    
    if (menu[path]) {
        var submenu = menu[path];
        const { view, title } = submenu;
        return res.render(`decouvrir/${view}`, {
            title: `21 | Galaxy - ${title}`,
            headerTitle: title
        });
    }
    next();
});


module.exports = router;