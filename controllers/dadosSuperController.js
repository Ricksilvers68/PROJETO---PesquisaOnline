const dadosSuperController = {
    dadosSupermercado:(req,res)=>{
        return res.render("dados_super")
    },

    salvarForm :(req,res)=>{
        let {CNPJ, name, endereco, estado, cidade, bairro, cep, numero } = req.body
        res.redirect("cad_sucesso")
    }
}

module.exports = dadosSuperController;

