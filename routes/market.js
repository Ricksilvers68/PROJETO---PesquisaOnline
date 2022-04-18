var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');

/* GET market page. */
router.get('/', auth, function(req, res, next) {
    res.render('market', { title: 'Smart List - Página do Mercado' });
});

module.exports = router;