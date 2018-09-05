const {DataTypes} = require('sequelize');
/**
 * 保险产品佣金表
 * @param sequelize
 */
const  sol_productfee = (sequelize) => {
    sequelize.define('sol_productfee',
        {
            feeid: { //产品费率ID
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            company: { //保险公司名称
                type: DataTypes.STRING
            },
            productname: { //保险产品名称
                type: DataTypes.STRING
            },
            payage: { //缴费年期
                type: DataTypes.SMALLINT
            },
            reward: {  //首年年供奖赏比率
                type: DataTypes.FLOAT
            },
            fee: { //基准佣金比率（如5年期 0.35，0.23，0.1，0.03，0.03）
                type: DataTypes.STRING
            },
            firstrate: { //首年佣金收入比率
                type: DataTypes.FLOAT
            },
            secondrate: { //次年佣金收入比率
                type: DataTypes.FLOAT
            },
            currency: { //币种（0：人民币，1港币，2美元）
                type: DataTypes.SMALLINT
            },
            firstfee: { //首年业绩佣金比率
                type: DataTypes.FLOAT
            },
            secondfee: { //次年业绩佣金比率
                type: DataTypes.FLOAT
            },
            firstdirectly: { //首年直属佣金比率
                type: DataTypes.FLOAT
            },
            seconddirectly: { //次年直属佣金比率
                type: DataTypes.FLOAT
            },
            firstmanage: { //首年管理佣金比率
                type: DataTypes.FLOAT
            },
            secondmanage: { //次管理佣金比率
                type: DataTypes.FLOAT
            },
            firstchannel: { //首年渠道佣金比率
                type: DataTypes.FLOAT
            },
            secondchannel: { //次年渠道佣金比率
                type: DataTypes.FLOAT
            },
            addtime: { //创建时间
                type: DataTypes.TIMESTAMP
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_productfee;