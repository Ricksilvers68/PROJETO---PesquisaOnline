const cadSuperController = {
    cadastroSupermercado: (req, res)=>{
        return res.render("cad_super")
    },

    formCad:(req, res)=>{
        let {userName, userEmail, tel} = req.body
        res.redirect("dados_super")
    }
}

module.exports = cadSuperController;