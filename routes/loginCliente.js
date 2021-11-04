var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('loginCliente', { title: 'Smart List - Página de Login' });
});

module.exports = router;