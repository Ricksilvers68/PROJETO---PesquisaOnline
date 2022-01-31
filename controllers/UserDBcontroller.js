const User = require("../src/models/User")
//CRUD

module.exports = {
  index: async (req, res) => {
    const usuario = await User.findAll()
    return res.render("usuarios", {usuario})
  },

  store: async (req, res) => {
    const { name, email, password_c } = req.body
    const usuario = await User.create({ name, email, password_c })
    return res.json(usuario)
  },

  update: async (req, res) => {
    const { name, email, password_c } = req.body
    const { id } = req.params
    await User.update({ name, email, password_c }, {

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