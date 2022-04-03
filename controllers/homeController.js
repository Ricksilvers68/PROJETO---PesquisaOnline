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
    forMenuDrop: async (req,res) => {
        let { name, email, password,flag_usuario } = req.body
        let password_c = bcrypt.hashSync(password, 10)
        await User.create({ name, email, password_c,flag_usuario }).value
        
    //let menuJson = JSON.stringify({ name, email, password_c })
    //fs.appendFileSync(menuDropJson, menuJson)

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            res.redirect("produtos")

        } else {

            const alert = errors.array()
            return res.render("home", {
                alert
            })
        
    }
}

    
}

module.exports = homeController