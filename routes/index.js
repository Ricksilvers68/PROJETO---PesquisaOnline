var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Smart List' });
});

router.get('/user', function(req, res, next) {
    res.render('user', { title: 'Smart List - Página do Usuário' });
});

module.exports = router;