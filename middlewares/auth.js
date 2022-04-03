const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require('../app');

const authentication = function autenticação(req, res, next) {
    if (typeof(req.session.usuario) != 'undefined') {
        return next()
    } else {
        return res.send("Você precisa está logado")
    }
}

module.exports = authentication