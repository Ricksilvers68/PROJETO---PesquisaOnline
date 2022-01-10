const User = require("../src/models/User")
//CRUD

module.exports = {
  index: async (req, res) => {
    const usuario = await User.findAll()
    return res.render("usuarios", {usuario})
  },

  store: async (req, res) => {
    const { name, email } = req.body
    const usuario = await User.create({ name, email })
    return res.json(usuario)
  },

  update: async (req, res) => {
    const { name, email } = req.body
    const { id } = req.params
    await User.update({ name, email }, {

      where: {
        id: id
      }
    })
    return res.json({ msg: "Seus dados foram atualizados com sucesso!" })
  },

  delete: async (req, res) => {
    const { id } = req.params
    User.destroy({
      where: {
        id: id
      }
    })
    return res.json({ msg: "Seus dados foram deletados" })
  }
}