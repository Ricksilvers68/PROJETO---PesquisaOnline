const session = require('express-session');

function acessProduct(req, res, event) {
    if (req.session.usuario == undefined) {
        event.preventDefault()
        alert('Você precisa fazer Login! Clique em "Fazer Login"')
    }
    return res.render("produtos")
}