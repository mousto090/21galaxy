const express = require('express');
const router = express.Router();

const menu = {
    'affaires-publiques': { title: 'Affaires publique', view: 'affaires-publiques' },
    'audit-financier': { title: "Audit Financier", view: 'audit-financier' },
    'gerer-ma-societe': { title: 'Créer / Gérer ma société', view: 'gerer-ma-societe' },
    'investir': { title: 'Investir', view: 'investir' },
    'luxe': { title: 'Luxe', view: 'luxe' },
    'marketing-communication': { title: 'Marketing et communication', view: 'marketing-communication' },
    'rh-formation': { title: 'RH et formation', view: 'rh-formation' },
    'sante': { title: 'Santé', view: 'sante' },
    'social': { title: 'Social', view: 'social' },
};


router.get('/poles/:path', function(req, res, next) {
    var path = (req.params['path'] || '').trim();
    
    if (menu[path]) {
        var submenu = menu[path];
        const { view, title } = submenu;
        return res.render(`poles/${view}`, {
            title: `21 | Galaxy - ${title}`,
            headerTitle: title
        });
    }
    next();
});


module.exports = router;