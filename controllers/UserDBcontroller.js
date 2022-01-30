const User = require("../src/models/User")
//CRUD

module.exports = {
  index: async (req, res) => {
    const { page = 1 } = req.query
    const { count: total, rows: usuario } = await User.findAndCountAll({
      limit: 8,
      offset: (page - 1) * 8 //page-1 para iniciar a partir da 1ª página
    })
    let totalPagina = Math.round(total / 8)
    return res.render("usuarios", { usuario, totalPagina })

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