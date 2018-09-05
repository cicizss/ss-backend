const {DataTypes} = require('sequelize');
/**
 * 保险公司返还佣金
 * @param sequelize
 */
const  sol_feeorders = (sequelize) => {
    sequelize.define('sol_feeorders',
        {
            id: { //关键字
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            policyNo: { //保单编号
                type: DataTypes.STRING,
                notNull: true
            },
            times: { //第几年,1为首年，2为次年
                type: DataTypes.INTEGER,
                notNull: true
            },
            value: { //佣金值
                type: DataTypes.FLOAT
            },
            receive: { //从保险公司收到的佣金值
                type: DataTypes.FLOAT
            },
            addtime: { //添加时间
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

module.exports = sol_feeorders;