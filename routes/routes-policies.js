const express = require('express');
const router = express.Router();

const menu = {
    'mentions-legales': { title: 'Mentions légales', view: 'mentions-legales' },
    'conditions': { title: 'Politique de protection des données personnelles', view: 'conditions' },
};


router.get('/policies/:path', function(req, res, next) {
    var path = (req.params['path'] || '').trim();
    
    if (menu[path]) {
        var submenu = menu[path];
        const { view, title } = submenu;
        return res.render(`policies/${view}`, {
            title: `21 | Galaxy - ${title}`,
            headerTitle: title
        });
    }
    next();
});


module.exports = router;