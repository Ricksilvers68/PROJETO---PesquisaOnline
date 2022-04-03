const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")


const categorias = require("../src/models/categorias")
const InfoAdc = require("../src/models/InfoAdc")
const Lista = require("../src/models/Lista")
const Produtos = require("../src/models/Produtos")
const Supermercado = require("../src/models/Supermercado")
const User = require("../src/models/User")
const UserMasterSup = require("../src/models/UserMasterSup")
const UserSup = require("../src/models/UserSup")
const Sequelize = require("sequelize")

//const menuDropJson = path.join("menuDrop.json")

const homeController = {
    home: (req, res) => {
        return res.render("home", { title: 'Smart List' })
    },
    forMenuDrop: async(req, res) => {
        try {
            let { email, password, flag_usuario } = req.body
                //console.log(req.body)
            let password_c = bcrypt.hashSync(password, 10)
                //console.log(password_c)
            if (flag_usuario == 'usuario') {
                const usuario = await UserSup.findOne({
                    where: { user: email }
                });
                if (usuario) {
                    if (password_c != usuario.password) {
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        //return console.log('Parabéns! Você está logado')
                        return res.render("home", { title: 'Smart List' })
                    }
                } else {
                    return console.log('Ops! Esse usuário não existe')
                }
            }
            if (flag_usuario == 'master') {
                const usuario = await UserMasterSup.findOne({
                    where: { user: email }
                });
                if (usuario) {
                    if (password != usuario.password) {
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        //return console.log('Parabéns! Você está logado')
                        return res.render("dados_super", { id: req.session.usuario })
                    }
                } else {
                    return console.log('Ops! Esse usuário não existe')
                }
            }
            if (flag_usuario == 'cliente') {
                const usuario = await User.findOne({
                    where: { email: email }
                });
                if (usuario) {
                    if (password_c != usuario.password_c) {
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        return console.log('Parabéns! Você está logado')
                    }
                } else {
                    //return console.log('Ops! Esse usuário não existe')
                    return res.render("produtos", { title: 'Smart List' })
                }
            }
        } catch (error) {
            console.log({ message: error })
        }
        //await User.create({ name, email, password_c,flag_usuario }).value

        //let menuJson = JSON.stringify({ name, email, password_c })
        //fs.appendFileSync(menuDropJson, menuJson)

        /* let errors = validationResult(req)

        if (errors.isEmpty()) {
            res.redirect("produtos")

        } else {

            const alert = errors.array()
            return res.render("home", {
                alert
            })

        } */
    }



}

module.exports = homeController