const session = require("express-session")
const {validationResult} = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

let dadosJson = path.join("dados.json")

const dadosSuperController = {
    dadosSupermercado:(req,res)=>{
        return res.render("dados_super")
    },

    salvarForm :(req,res)=>{
        let {CNPJ, nome, endereco, estado, cidade, bairro, cep, numero } = req.body
        let dados = JSON.stringify({CNPJ, nome, endereco, estado, cidade, bairro, cep, numero})
        fs.appendFileSync(dadosJson, dados)
        res.redirect("cad_sucesso")
    }
}

module.exports = dadosSuperController;

