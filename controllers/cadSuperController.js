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



//let hash = bcrypt.hashSync("46780545", 10)
//let usuarioJson = path.join("usuarios.json")

const cadSuperController = {
    cadastroSupermercado: (req, res) => {
        return res.render("cad_super")
    },

    formCad: async(req, res) => {
        let { name, email, password, flag_usuario } = req.body
        let password_c = bcrypt.hashSync(password, 10)

        if (flag_usuario == 'supermercado') {
            console.log('salvando na tabelas usuarios_sup')
            await UserSup.create({ nome: name, user: email, password: password_c, flag_usuario }).value
        } else {
            console.log('salvando na tabelas users')
            await User.create({ name, email, password_c, flag_usuario }).value
        }
        //let usuarios = JSON.stringify({ name, email, password_c, tipo })
        //fs.appendFileSync(usuarioJson, usuarios)

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            if (flag_usuario == 'supermercado') {
                res.redirect("loginSupermercado")
            } else {
                res.redirect('cad_pes_fisica')
            }


        } else {

            const alert = errors.array()
            return res.render("cad_super", {
                alert
            })

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