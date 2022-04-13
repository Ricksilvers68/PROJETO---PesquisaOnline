const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require('../app');

const validateUser = (req, res, next) => {
    if (req.session.usuario == 'master') {
        return next()
    } else {
        return res.send("Você não tem permissão para essa página")
    }
}

module.exports = validateUser