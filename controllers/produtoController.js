const categorias = require("../src/models/categorias")
const Produtos = require("../src/models/Produtos")
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

        var produto = array

        if (type == undefined) {
            return res.render("produtos", {
                titulo: "CATEGORIAS",
                produtos: produto
            })
        } else {
            const searchCategorias = await categorias.findOne({
                where: { nome: type }
            });
            console.log("Id categorias é: " + searchCategorias.id)
            if (searchCategorias) {
                console.log(searchCategorias)
                const searchProdutos = await Produtos.findOne({
                    where: {
                        categoriaId: searchCategorias.id
                    }
                });

                console.log('Lista de produtos' + searchProdutos)
                console.log(searchCategorias.nome)


                return res.render("produtos", {
                    titulo: "CATEGORIAS",
                    produtos: produto,
                    nomeCategoria: searchCategorias.nome,
                    nomeProduto: searchProdutos.nome
                })
            } else {
                return res.send("erro, falta de dados")
            }
        }
    }
}

module.exports = produtoController;