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
                //let password_c = bcrypt.hashSync(password, 10)
                //console.log(password_c)
            if (flag_usuario == 'usuario') {
                const usuario = await User.findOne({
                    where: { email: email }
                });
                //console.log(usuario)
                if (usuario) {
                    let match = await bcrypt.compare(req.body.password, usuario.password_c)
                    console.log(match)
                    if (!match) {
                        //if (password_c != usuario.password_c) {
                        console.log('Hash da senha que digitou: ' + req.body.password + ' Hash da senha que está no BD: ' + usuario.password_c)
                        console.log('Usuario ou senha incorreto')
                        return res.render("home", { title: 'Smart List' })
                    } else {
                        //create session
                        req.session.usuario = 'usuario'
                        req.session.name = usuario.name
                        console.log('Parabéns! Você está logado ' + req.session.name)
                        return res.redirect("produtos")
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
                    let match = await bcrypt.compare(req.body.password, usuario.password)

                    if (!match) {
                        //if (password_c != usuario.password) {
                        console.log('Hash da senha que digitou: ' + password_c + ' Hash da senha que está no BD: ' + usuario.password)
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        //create session
                        req.session.usuario = 'master'
                        req.session.idUsuario = usuario.id
                        req.session.nome = usuario.nome
                        console.log('Parabéns! Você está logado ' + req.session.nome + ' ' + req.session.idUsuario)
                        return res.render("dados_super")
                    }
                } else {
                    return console.log('Ops! Esse usuário não existe')
                }
            }
            if (flag_usuario == 'supermercado') {
                const usuario = await UserSup.findOne({
                    where: { email: email }
                });
                if (usuario) {
                    if (password_c != usuario.password_c) {
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        return console.log('Parabéns! Você está logado')
                    }
                } else {
                    //create session
                    req.session.usuario = 'supermercado'
                    console.log('Parabéns! Você está logado ' + req.session.usuario)
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