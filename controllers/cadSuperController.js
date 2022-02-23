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
        let { name, email, password, flag_usuario } = req.body
        let password_c = bcrypt.hashSync(password, 10)
        let usuario = { name, email, password: password_c, flag_usuario }
        await User.create({ name, email, password_c, flag_usuario }).value
            //let usuarios = JSON.stringify({ name, email, password_c, tipo })
            //fs.appendFileSync(usuarioJson, usuarios)
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            return res.redirect("dados_super")


        } else {
            return res.send({ errors: errors.array() })
        }

    },
    index: async(req, res) => {
        const { page = 1 } = req.query
        const { count: total, rows: usuario } = await User.findAndCountAll({
            limit: 8,
            offset: (page - 1) * 8 //page-1 para iniciar a partir da 1ª página
        })
        let totalPagina = Math.round(total / 8)
        return res.render("usuarios", { usuario, totalPagina })

    },
    update: async(req, res) => {
        const { name, email, password_c } = req.body
        const { id } = req.params
        await User.update({ name, email, password_c }, {

            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram atualizados com sucesso!" })
    },

    delete: async(req, res) => {
        const { id } = req.params
        User.destroy({
            where: {
                id: id
            }
        })
        return res.json({ msg: "Seus dados foram deletados" })
    }
}





module.exports = cadSuperController;