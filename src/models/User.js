const { Model, DataTypes } = require("sequelize")

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_c: DataTypes.STRING,
            flag_usuario: DataTypes.STRING,
            user: DataTypes.STRING
        }, { sequelize })
    }
}

module.exports = User