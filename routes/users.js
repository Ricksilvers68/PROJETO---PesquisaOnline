var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('user', { title: 'Smart List - Página do Usuário' });
});

module.exports = router;