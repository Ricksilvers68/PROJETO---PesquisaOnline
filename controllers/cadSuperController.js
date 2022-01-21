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

    formCad: async (req, res) => {
        let { name, email, password } = req.body
        let password_c = bcrypt.hashSync(password, 10)
        let usuario = { name, email, password: password_c }
        await User.create({ name, email, password_c })
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            return res.redirect("dados_super")

        } else {
            return res.send({ errors: errors.array() })
        }

    },

}

module.exports = cadSuperController;