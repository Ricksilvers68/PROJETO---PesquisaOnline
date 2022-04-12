const { Model, DataTypes } = require("sequelize")

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_c: DataTypes.STRING,
            flag_usuario: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'users',
        });
        return User
    }

    static associate(models) {
        User.hasOne(models.InfoAdc, {
                as: 'InformacaoAdicional'
            }),
            User.hasMany(models.Lista, {
                as: 'Listas'
            })
    }


}

module.exports = User