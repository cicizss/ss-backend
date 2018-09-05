const {DataTypes} = require('sequelize');
/**
 * 保险公司返还佣金
 * @param sequelize
 */
const  sol_feeriches = (sequelize) => {
    sequelize.define('sol_feeriches',
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
            fee: { //顾问佣金
                type: DataTypes.FLOAT,
                notNull: true
            },
            type: { //类型：1首年业绩佣金，2次年业绩佣金，3首年直属佣金，4次年直属佣金，5首年管理佣金，6次管理佣金，7首年渠道佣金，8次年渠道佣金
                type: DataTypes.INTEGER
            },
            richeid: { //顾问ID
                type: DataTypes.INTEGER
            },
            minus: { //服务费用
                type: DataTypes.FLOAT
            },
            exchange: { //美元对人民币汇率
                type: DataTypes.FLOAT
            },
            state: { //状态：1核审，2异常，3已发放
                type: DataTypes.INTEGER
            },
            remark: { //说明备注
                type: DataTypes.STRING
            },
            paytime: { //支付时间
                type: DataTypes.TIMESTAMP
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true,
        }
    );
}

module.exports = sol_feeriches;