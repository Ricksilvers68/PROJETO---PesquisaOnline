const express = require("express")
const session = require("express-session")
const { check, validationResult, body } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const override = require("method-override")

//Models
const categorias = require("../src/models/categorias")
const InfoAdc = require("../src/models/InfoAdc")
const Lista = require("../src/models/Lista")
const Produtos = require("../src/models/Produtos")
const Supermercado = require("../src/models/Supermercado")
const User = require("../src/models/User")
const UserMasterSup = require("../src/models/UserMasterSup")
const UserSup = require("../src/models/UserSup")
const Sequelize = require("sequelize")



//let hash = bcrypt.hashSync("46780545", 10)
//let usuarioJson = path.join("usuarios.json")

const cadSuperController = {
    cadastroSupermercado: (req, res) => {
        return res.render("cad_super")
    },

    formCad: async (req, res) => {
        let { name, email, password, flag_usuario } = req.body
        let password_c = bcrypt.hashSync(password, 10)
        await User.create({ name, email, password_c, flag_usuario }).value

        //let usuarios = JSON.stringify({ name, email, password_c, tipo })
        //fs.appendFileSync(usuarioJson, usuarios)

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            res.redirect("cad_pes_fisica")

        } else {

            if (errors.isEmpty()) {
                res.redirect("dados_super")
            }

            const alert = errors.array()
            return res.render("cad_super", {
                alert
            })

        }

    },

    index: async (req, res) => {
        const { page = 1 } = req.query
        const { count: total, rows: usuario } = await User.findAndCountAll({
            limit: 8,
            offset: (page - 1) * 8 //page-1 para iniciar a partir da 1ª página
        })
        let totalPagina = Math.round(total / 8)
        return res.render("usuarios", { usuario, totalPagina })

    },
    //GET
    editForm: async (req, res) => {
        const { name, email, password_c, flag_usuario } = req.body
        const { id } = req.params
        const edit = await User.findByPk(id)
        return res.render("updateUsuario", { edit })
    },
    //PUT
    update: async (req, res) => {
        const { id } = req.params
        const { name, email, password_c, flag_usuario } = req.body
        const resultado = await User.update({
            name, email, password_c
        },
            {
                where: {
                    id: id
                }

            })
        console.log(resultado)

        return res.redirect("/usuarios")
    },
    //DELETE
    delete: async (req, res) => {
        const { id } = req.params
        User.destroy({
            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram deletados" })
    }
}





module.exports = cadSuperController;