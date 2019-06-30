const express = require('express');
const router = express.Router();

const menu = {
    'assurance': { title: 'Assurance', view: 'assurance' },
    'bancaire': { title: 'Bancaire', view: 'bancaire' },
    'btp-et-immobilier': { title: 'BTP et Immobilier', view: 'btp-immobilier' },
    'education': { title: 'Education', view: 'education' },
    'energie-et-environnement': {
        title: 'Energie & Environnement',
        view: 'energie-environnement'
    },
    'Investissements-et-innovations': {
        title: 'Investissements et Innovations',
        view: 'inverstissement-innovation'
    },
    'luxe': { title: 'Luxe', view: 'luxe' },
    'sante': { title: 'Santé', view: 'sante' },
    'public': { title: 'Secteur Public', view: 'public' },
    'service': { title: 'Services', view: 'service' },
    'social-et-solidarite': { title: 'Social et Solidarité', view: 'social-solidarite' },
    'sport': { title: 'Sport', view: 'sport' },
    'telecommunications-medias-divertissements': {
        title: 'Télécommunications, Médias et divertissements',
        view: 'telecom-media-divertissement'
    },
    'tourisme': { title: 'Tourisme', view: 'tourisme' },
};

router.get('/secteurs', function(req, res) {
    const title = 'Secteurs';
    res.render('secteurs/index', {
        title: `21 | Galaxy - ${title}`,
        headerTitle: title
    });
});

router.get('/secteurs/:path', function(req, res, next) {
    var path = (req.params['path'] || '').trim();
    
    if (menu[path]) {
        var submenu = menu[path];
        const { view, title } = submenu;
        return res.render(`secteurs/${view}`, {
            title: `21 | Galaxy - Secteur ${title}`,
            headerTitle: title
        });
    }
    next();
});


module.exports = router;