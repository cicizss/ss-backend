const {DataTypes} = require('sequelize');
/**
 * 数据配置
 * @param sequelize
 */
const  sol_data = (sequelize) => {
    sequelize.define('sol_data',
        {
            key: { //关键字
                type: DataTypes.STRING,
                primaryKey: true,
            },
            value: { //关键值
                type: DataTypes.INTEGER
            },
            remark: { //备注
                type: DataTypes.STRING
            },
            addtime: { //备注
                type: DataTypes.TIMESTAMP
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = sol_data;