const cadSucessoController = {
    cadastroComSucesso: (req, res) => {
        return res.render("cad_sucesso",{user:req.session.user})

    }
}

module.exports = cadSucessoController