const Sequelize = require("sequelize")
const dbConfig = require("../config/database.js")
const User = require("../models/User")//importando o model criado

const connection = new Sequelize(dbConfig)

User.init(connection)//para conectarmos ao model

//connection.authenticate()
//.then(function(){
//   console.log("Conectado com sucesso ao BD!")
//}).catch(function(erro){
//    console.log("Erro ao tentar se conectar ao BD" + erro)
//})



module.exports = connection