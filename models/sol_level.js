const {DataTypes} = require('sequelize');
/**
 * 级别
 * @param sequelize
 */
const  sol_level = (sequelize) => {
    sequelize.define('sol_level',
        {
            level: { //关键字
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { //级别名称
                type: DataTypes.INTEGER
            },
            paymoney: { //购买保单金额
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

module.exports = sol_level;