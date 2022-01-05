const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

let hash = bcrypt.hashSync("46780545", 10)
let usuarioJson = path.join("usuarios.json")

const cadSuperController = {
    cadastroSupermercado: (req, res) => {
        return res.render("cad_super")
    },

    formCad: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let { userName, userEmail, password } = req.body
            let passwordC = bcrypt.hashSync(password, 10)
            let usuario = JSON.stringify({ userName, userEmail, password: passwordC })
            fs.appendFileSync(usuarioJson, usuario)
            res.redirect("dados_super")

        } else {
            return res.send({ errors: errors.array() })
        }

    }
}

module.exports = cadSuperController;