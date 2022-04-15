const categorias = require("../src/models/categorias")
const Sequelize = require("sequelize")

const produtoController = {
    categorias: async(req, res) => {
        type = req.query.type
        console.log(type)

        var produtos = await categorias.findAll()
        var array = []

        for (let i = 0; i < 8; i++) {
            array.push(produtos[i].nome)
        }
        console.log(array)

        var produto = array

        return res.render("produtos", {
            titulo: "CATEGORIAS",
            produtos: produto
        })
    }
}

module.exports = produtoController;