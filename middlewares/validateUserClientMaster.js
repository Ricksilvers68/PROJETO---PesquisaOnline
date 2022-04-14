const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require('../app');

const validateUserClientMaster = (req, res, next) => {
    if (req.session.usuario == 'usuario') {
        console.log(req.session.usuario)
        console.log('Você tem permissão para acessar essa página ' + req.session.name)
        return next()
    }
    if (req.session.usuario == 'supermercado') {
        console.log(req.session.usuario)
        console.log('Você tem permissão para acessar essa página ' + req.session.name)
        return next()
    }
    if (req.session.usuario == 'master') {
        console.log(req.session.usuario)
        console.log('Você tem permissão para acessar essa página ' + req.session.name)
        return next()
    } else {
        return res.send("Você não tem permissão para essa página")
    }
}

module.exports = validateUserClientMaster

//return res.send("Você não tem permissão para essa página")