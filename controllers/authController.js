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
const app = require("../app")

app.use(session)

const authController = {
    auth: (req, res) => {
        if (flag_usuario == 'supermercado') {
            UserSup.findOne({ 'user': req.body.email })
                .then(user => {
                    if (user) {
                        res.json({ success: false, message: 'Este usuário não existe' })
                    } else {
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {

                                let encryptedPassword = hash;

                                let
                            })
                    }
                })
        }
    }
}