const { Model, DataTypes } = require("sequelize")

class Lista extends Model {
    static init(sequelize) {
      super.init({
        id_user_fk: DataTypes.INTEGER,
        id_prod_fk: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'Lista',
      });
      return Lista;
    }
    static associate(models) {
      Lista.belongsTo(models.User,{
        foreignKey: 'id_user_fk',
        as: 'usuario'
      }),
      Lista.belongsTo(models.Produtos,{
        foreignKey: 'id_prod_fk',
        as: 'produto'
      })
    }
  }
  
module.exports = Lista