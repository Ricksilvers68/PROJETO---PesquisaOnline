const Sequelize = require("sequelize")
const dbConfig = require("../config/database.js")
    //importando o model criado:
const User = require("../models/User")
const Supermercado = require("../models/Supermercado")
const InfoAdc = require('../models/InfoAdc')
const Lista = require('../models/Lista')
const produtos = require('../models/Produtos')
const UserMasterSup = require('../models/UserMasterSup')
const UserSup = require('../models/UserSup')
const categorias = require('../models/categorias')

const connection = new Sequelize(dbConfig)

//para conectarmos ao model
User.init(connection)
Supermercado.init(connection)
InfoAdc.init(connection)
Lista.init(connection)
produtos.init(connection)
UserMasterSup.init(connection)
UserSup.init(connection)
categorias.init(connection)

//connection.authenticate()
//.then(function(){
//   console.log("Conectado com sucesso ao BD!")
//}).catch(function(erro){
//    console.log("Erro ao tentar se conectar ao BD" + erro)
//})



module.exports = connection