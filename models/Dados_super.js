const { DataTypes } = require("sequelize/dist")

module.exports = (sequelize, dataType)=>{
    const Dados_super = sequelize.define("Dados_super", {
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncerement: true
        },
        cnpj:{
            type:DataType.INTERGER,
            allowNull: false,
            Unique: true
        },
        nome:{
            type:DataType.STRING,
            allowNull: false
        },
        endereco:{
            type:DataType.STRING,
            allowNull: false,
        },
        estado:{
            type:DataType.STRING,
            allowNull: false,
            default: "São Paulo"
        },
        cidade:{
            type:DataType.STRING,
            allowNull: false,
            
        },
        bairro:{
            type:DataType.STRING,
            allowNull: false,
            
        },
        cep:{
            type:DataType.INTERGER,
            allowNull: false,
            
        },
        numero:{
            type:DataType.INTERGER,
            allowNull: false,
            
        },
    },{
        tableName: "dados_super",//Esse de fato é o nome da tabela
        timesTamps: false
    })

    return Dados_super
    }
