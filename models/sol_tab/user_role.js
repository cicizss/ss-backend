const {DataTypes} = require('sequelize');
/**
 * 角色表
 * @param sequelize
 */
const  user_role = (sequelize) => {
    sequelize.define('user_role',
        {
            id: { //自增id
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { //名称
                type: DataTypes.STRING
            },
            type: { //
                type: DataTypes.STRING
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = user_role;