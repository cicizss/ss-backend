const {DataTypes} = require('sequelize');
/**
 * 竟见反馈
 * @param sequelize
 */
const  sol_context = (sequelize) => {
    sequelize.define('sol_context',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            richeid: { //顾问ID
                type: DataTypes.INTEGER
            },
            context: { //提交内容
                type: DataTypes.STRING
            }
        },
        {
            autoIncrement: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = sol_context;