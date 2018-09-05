const {DataTypes} = require('sequelize');
/**
 * 用户--角色对应表
 * @param sequelize
 */
const  user_role_rel = (sequelize) => {
    sequelize.define('user_role_rel',
        {
            id: { //自增id
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            uid: { //用户id
                type: DataTypes.BIGINT
            },
            rid: { //角色id
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

module.exports = user_role_rel;