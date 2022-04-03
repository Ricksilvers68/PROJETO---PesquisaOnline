const { Model, DataTypes } = require("sequelize")

class UserSup extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            user: DataTypes.STRING,
            password: DataTypes.STRING,
            flag_usuario: DataTypes.STRING,
            id_sm_fk: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'UserSup',
            tableName: 'usuarios_sup',
            underscored: false
        });
        return UserSup;
    }
    static associate(models) {
        UserSup.belongsTo(models.Supermercado, {
                foreignKey: 'id_sm_fk',
                as: 'supermercados'
            }),
            UserSup.hasOne(models.InfoAdc, {
                as: 'InformacaoAdicional'
            })
    }
}

module.exports = UserSup