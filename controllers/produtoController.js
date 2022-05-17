const session = require("express-session")
const { validationResult } = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const auth = require("../middlewares/auth")



const categorias = require("../src/models/categorias")
const InfoAdc = require("../src/models/InfoAdc")
const Lista = require("../src/models/Lista")
const Produtos = require("../src/models/Produtos")
const Supermercado = require("../src/models/Supermercado")
const User = require("../src/models/User")
const UserMasterSup = require("../src/models/UserMasterSup")
const UserSup = require("../src/models/UserSup")
const Sequelize = require("sequelize")


const produtoController = {
    index: (req, res) => {
        return res.render("produtos", {
            titulo: "CATEGORIAS",
            produtos: ["Padaria", "Açougue", "Congelados", "Resfriados", "Hortifrut", "Higiêne", "Cesta Básica", "Bebidas"]
        })
    }
}


module.exports = produtoController;
