const produtoController = {
    index: (req, res) => {
        type = req.query.type
        console.log(type)

        return res.render("produtos", {
            titulo: "CATEGORIAS",
            produtos: ["Padaria", "Açougue", "Congelados", "Resfriados", "Hortifrut", "Higiêne", "Alimentação", "Bebidas"]
        })
    }
}

module.exports = produtoController;