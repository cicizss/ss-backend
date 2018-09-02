const {DataTypes} = require('sequelize');
/**
 * 顾问生成计划书
 * @param sequelize
 */
const  sol_richeplans = (sequelize) => {
    sequelize.define('sol_richeplans',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            planid: { //计划书ID
                type: DataTypes.INTEGER
            },
            attach: { //附加条款
                type: DataTypes.STRING
            },
            return: { //提取演示（N年后可提取）
                type: DataTypes.SMALLINT
            },
            remark: { //备注（个性化提取演示）
                type: DataTypes.STRING
            },
            addtime: { //生成计划书时间
                type: DataTypes.TIMESTAMP
            },
            richeid: { //顾问ID
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

module.exports = sol_richeplans;