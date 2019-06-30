const express = require('express');
const router = express.Router();

const menu = {
    'accompagnement-comptable-et-financier': {
        title: 'Accompagnement comptable et financier',
        view: 'accompagnement-comptable-et-financier'
    },
    'audit-financier': { title: "Audit financier", view: 'audit-financier' },
    'conseil': { title: 'Conseil', view: 'conseil' },
    'digital': { title: 'Digital', view: 'digital' },
    'expertise-comptable': { title: 'Expertise comptable', view: 'expertise-comptable' },
    'fiscalite': { title: 'Fiscalité', view: 'fiscalite' },
    'juridique': { title: 'Juridique', view: 'juridique' },
    'management-strategique': { title: 'Management stratégique', view: 'management-strategique' },
    'marketing-et-communication': { title: 'Marketing et communication', view: 'marketing-et-communication' },
    'rh-de-talents-et-formations': { title: 'RH de talents et Formations', view: 'rh-de-talents-et-formations' },
};

router.get('/expertises/', function(req, res) {
    const title = 'Expertises';
    res.render('expertises/index', {
        title: `21 | Galaxy - ${title}`,
        headerTitle: title
    });
});

router.get('/expertises/:path', function(req, res, next) {
    var path = (req.params['path'] || '').trim();

    if (menu[path]) {
        var submenu = menu[path];
        const { view, title } = submenu;
        return res.render(`expertises/${view}`, {
            title: `21 | Galaxy - Expertises ${title}`,
            headerTitle: title
        });
    }
    next();
});


module.exports = router;