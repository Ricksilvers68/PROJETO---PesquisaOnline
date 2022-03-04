'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lista.init({
    id_user_fk: DataTypes.INTEGER,
    id_prod_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lista',
  });
  return Lista;
};