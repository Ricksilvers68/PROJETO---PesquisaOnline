const sequelize = require("sequelize")
const database = require("../config/dados")

const Dados = database.define("dados",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    endereco:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Dados