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
            var { email, password, flag_usuario } = req.body
            if (flag_usuario == 'usuario') {
                console.log('Você está logando como usuario!')
                const usuario = await User.findOne({
                    where: { email: email }
                });
                //console.log(usuario)
                if (usuario) {
                    let match = await bcrypt.compare(req.body.password, usuario.password_c)
                    console.log(match)
                    if (!match) {
                        console.log('Senha que digitou: ' + req.body.password + ' Hash da senha que está no BD: ' + usuario.password_c)
                        console.log('Usuario ou senha incorreto')
                        return res.render("home", { title: 'Smart List' })
                    } else {
                        console.log('Senha que digitou: ' + req.body.password + ' Hash da senha que está no BD: ' + usuario.password_c)
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
                console.log('Você está logando como master!')
                const usuario = await UserMasterSup.findOne({
                    where: { user: email }
                });
                if (usuario) {
                    //console.log(comparaHash)
                    let match = await bcrypt.compare(req.body.password, usuario.password)
                    console.log(match)
                    if (!match) {
                        //if (password_c != usuario.password) {
                        console.log('Senha que digitou: ' + req.body.password + ' Hash da senha que está no BD: ' + usuario.password)
                        console.log('Usuario ou senha incorreto')
                        return res.redirect("/")
                    } else {
                        //create session
                        req.session.usuario = 'master'
                        req.session.idMaster = usuario.id
                        req.session.nome = usuario.nome
                        console.log('Parabéns! Você está logado ' + req.session.nome + ' ' + req.session.idMaster)
                        return res.render("dados_super")
                    }
                } else {
                    return console.log('Ops! Esse usuário não existe')
                }
            }
            if (flag_usuario == 'supermercado') {
                console.log('Você está logando como supermercado!')
                const usuario = await UserSup.findOne({
                    where: { user: email }
                });
                if (usuario) {
                    let match = await bcrypt.compare(req.body.password, usuario.password)
                    console.log(match)
                    if (!match) {
                        //if (password_c != usuario.password_c) {
                        return console.log('Usuario ou senha incorreto')
                    } else {
                        //create session
                        req.session.usuario = 'supermercado'
                        req.session.idUsuario = usuario.id
                        req.session.nome = usuario.nome
                        console.log('Parabéns! Você está logado ' + req.session.nome)
                        return res.render("loginSupermercado", { title: 'Smart List', nome: req.session.nome, content: 'Escolha uma das opções ao lado!', contentTop: 'O que fará hoje?' })
                    }
                } else {
                    console.log('Ops! Esse usuário não existe')
                    return alert('Esse usuário não existe!')
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