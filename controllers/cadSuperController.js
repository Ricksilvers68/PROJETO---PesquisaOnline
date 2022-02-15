const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")



const User = require("../src/models/User")
const Sequelize = require("sequelize")



//let hash = bcrypt.hashSync("46780545", 10)
//let usuarioJson = path.join("usuarios.json")

const cadSuperController = {
    cadastroSupermercado: (req, res) => {
        return res.render("cad_super")
    },

    formCad: async(req, res) => {
        try {
            let { name, email, password, flag_usuario } = req.body
            let password_c = bcrypt.hashSync(password, 10)
            let usuario = { name, email, password: password_c, flag_usuario }
            await User.create({ name, email, password_c, flag_usuario }).value
        } catch (error) {
            console.log(message.error)

        }


        //let usuarios = JSON.stringify({ name, email, password_c, tipo })
        //fs.appendFileSync(usuarioJson, usuarios)
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            return res.redirect("dados_super")

        } else {
            return res.send({ errors: errors.array() })
        }

    },

}

module.exports = cadSuperController;