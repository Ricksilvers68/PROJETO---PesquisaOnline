const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const Supermercado = require("../src/models/Supermercado")

const masterController = {
    master: (req, res) => {
        return res.render("formSuper")
    }
}

module.exports = masterController