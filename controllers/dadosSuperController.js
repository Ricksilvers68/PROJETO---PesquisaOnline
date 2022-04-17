const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")

const categorias = require("../src/models/categorias")
const InfoAdc = require("../src/models/InfoAdc")
const Lista = require("../src/models/Lista")
const Produtos = require("../src/models/Produtos")
const Supermercado = require("../src/models/Supermercado")
const User = require("../src/models/User")
const UserMasterSup = require("../src/models/UserMasterSup")
const UserSup = require("../src/models/UserSup")


//let dadosJson = path.join("dados.json")


const dadosSuperController = {
    dadosSupermercado: (req, res) => {
        return res.render("dados_super")
    },

    salvarForm: async (req, res) => {
        try {
            let { nome, endereco, cnpj, id_master_fk } = req.body
            //let dados = JSON.stringify({ nome, cnpj, endereco, estado, cidade, bairro, cep, numero })
            //fs.appendFileSync(dadosJson, dados)
            await Supermercado.create({ nome, endereco, cnpj, id_master_fk })
            res.redirect("cad_sucesso")
        } catch (error) {
            console.log({ message: error })
        }

    },

    index: async (req, res) => {
        try {
            const { page = 1 } = req.query
            const { count: total, rows: supermercado } = await Supermercado.findAndCountAll({
                limit: 8,
                offset: (page - 1) * 8 //page-1 para iniciar a partir da 1ª página
            })
            let totalPagina = Math.round(total / 8)
            return res.render("supermercados", { supermercado, totalPagina })
        } catch (error) {
            console.log({
                message: error
            })
        }


    },
    update: async (req, res) => {
        const { nome, endereco, cnpj } = req.body
        const { id } = req.params
        await Supermercado.update({ nome, endereco, cnpj }, {

            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram atualizados com sucesso!" })
    },

    delete: async (req, res) => {
        const { id } = req.params
        Supermercado.destroy({
            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram deletados" })
    }
}



module.exports = dadosSuperController;