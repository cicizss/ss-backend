const {DataTypes} = require('sequelize');
/**
 * 角色--权限对应表
 * @param sequelize
 */
const  user_role_permission = (sequelize) => {
    sequelize.define('user_role_permission',
        {
            id: { //自增id
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            rid: { //角色id
                type: DataTypes.BIGINT
            },
            pid: { //权限id
                type: DataTypes.BIGINT
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = user_role_permission;