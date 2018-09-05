const {DataTypes} = require('sequelize');
/**
 * 资源库类型
 * @param sequelize
 */
const  sol_resource_type = (sequelize) => {
    sequelize.define('sol_resource_type',
        {
            resid: { //资源ID
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { //名称
                type: DataTypes.STRING
            },
            image: { //logo图片
                type: DataTypes.STRING
            },
            pid: { //父ID
                type: DataTypes.INTEGER
            },
            sort: { //排序（从小到大升序）
                type: DataTypes.INTEGER
            },
            hide: { //0隐藏，1显示
                type: DataTypes.INTEGER
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_resource_type;