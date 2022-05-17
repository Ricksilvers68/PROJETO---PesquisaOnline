function auth(req, res, next) {
    if (typeof (req.session.user) != "undefined"){
        return next()
    }else{
        return res.send("Você precisa fazer o login para acessar o site!!!")
    }
}
module.exports = auth