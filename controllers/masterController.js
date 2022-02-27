const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const Supermercado = require("../src/models/Supermercado")

const userMasterJson = path.join("userMaster.json")

const masterController = {
    master: (req, res) => {
        return res.render("formSuper")
    },


    resForm: (req, res) => {
        let { nome, email, password } = req.body
        password_c = bcrypt.hashSync(password, 10)
        let user = { nome, email, password: password_c }
        let userMaster = JSON.stringify({ nome, email, password_c })
        fs.appendFileSync(userMasterJson, userMaster)
        return res.render("dados_super")
    }
}


module.exports = masterController