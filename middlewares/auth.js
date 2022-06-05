function auth(req, res, next) {
    if (typeof (req.session.user) != "undefined"){
        return next()
    }else{
        return res.send("Voce precisa fazer login")
        
    }
}
module.exports = auth