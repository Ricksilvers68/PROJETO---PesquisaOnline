const Sequelize = require("sequelize")
const dbConfig = require("../config/database.js")
    //importando o model criado:
const User = require("../models/User")
const Supermercado = require("../models/Supermercado")

const connection = new Sequelize(dbConfig)

//para conectarmos ao model
User.init(connection)
Supermercado.init(connection)

//connection.authenticate()
//.then(function(){
//   console.log("Conectado com sucesso ao BD!")
//}).catch(function(erro){
//    console.log("Erro ao tentar se conectar ao BD" + erro)
//})



module.exports = connection