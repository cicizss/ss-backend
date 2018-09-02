const {DataTypes} = require('sequelize');
/**
 * 权限表--记录所有可操作权限
 * @param sequelize
 */
const  user_permission = (sequelize) => {
    sequelize.define('user_permission',
        {
            id: { //自增id
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            url: { //url地址
                type: DataTypes.STRING
            },
            name: { //名称
                type: DataTypes.STRING
            },
            parent_id: { //父节点id
                type: DataTypes.BIGINT
            },
            code: { //权限code
                type: DataTypes.STRING
            },
            type: { //判断是菜单还是按钮 1菜单 2按钮
                type: DataTypes.STRING
            },
            icon_class: { //
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

module.exports = user_permission;