const produtoController = {
    index: (req, res) => {
        return res.render("produtos", {
            titulo: "CATEGORIAS",
            produtos: ["Padaria", "Açougue", "Congelados", "Resfriados", "Hortifrut", "Higiêne", "Alimentação", "Bebidas"]
        })
    }
}

module.exports = produtoController;
