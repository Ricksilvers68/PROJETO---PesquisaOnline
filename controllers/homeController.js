const session = require("express-session")
const { check, validationResult, body } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

//models
const categorias = require("../src/models/categorias")
const InfoAdc = require("../src/models/InfoAdc")
const Lista = require("../src/models/Lista")
const Produtos = require("../src/models/Produtos")
const Supermercado = require("../src/models/Supermercado")
const User = require("../src/models/User")
const UserMasterSup = require("../src/models/UserMasterSup")
const UserSup = require("../src/models/UserSup")
const Sequelize = require("sequelize")
const { sync } = require("../src/models/categorias")

// senhas para testes de autenticação:
// fulano@gmail.com senha: 456789
// ricardosilv@email.com  senha: 123456

//const menuDropJson = path.join("menuDrop.json")


const homeController = {
    home: (req, res) => {
        return res.render("home", { title: 'Smart List' })
    },

    forMenuDrop: async (req, res) => {
        const users = await User.findOne({
            attributes: ["name", "email", "password_c", "flag_usuario"],
            where: {
                email: req.body.email
            }
        })

        let errors = validationResult(req)

        if (users === null) {
            const alert = errors.array()
            return res.render("home", {
                alert
            })
        }

        if (!(await bcrypt.compare(req.body.password_c, users.password_c))) {
            const alert = errors.array()
            return res.render("home", {
                alert
            })
        }

        if (await users.flag_usuario != "supermercado") {
            return res.redirect("produtos")

        }
        else {
            const alert = errors.array()
            res.redirect("loginSupermercado")
            return res.render("home", {
                alert
            })

        }

    }
}


module.exports = homeController