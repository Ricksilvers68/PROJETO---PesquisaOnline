const { Model, DataTypes } = require("sequelize")

class InfoAdc extends Model {
    static init(sequelize) {
      super.init({
        sexo: DataTypes.STRING,
        nascimento: DataTypes.STRING,
        password: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cpf_cnpj: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        id_user_fk: DataTypes.INTEGER,
        id_user_sm_fk: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'InfoAdc',
      });
      return InfoAdc;
    }
    static associate(models) {
        InfoAdc.belongsTo (models.UserSup,{
          foreignKey: 'id_user_sm_fk',
          as: 'UsuariosSuper'
        }),
        InfoAdc.belongsTo (models.User,{
          foreignKey: 'id_user_fk',
          as: 'Usuarios'
        })
      }
  }
  module.exports = InfoAdc