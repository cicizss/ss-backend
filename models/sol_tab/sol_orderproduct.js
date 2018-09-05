const {DataTypes} = require('sequelize');
/**
 * 保险产品订单
 * @param sequelize
 */
const  sol_orderproduct = (sequelize) => {
    sequelize.define('sol_orderproduct',
        {
            policyNo: { //预约订单号
                type: DataTypes.STRING,
                primaryKey: true
            },
            productname: { //保险产品名称
                type: DataTypes.STRING
            },
            policyowner: { //保单持有人
                type: DataTypes.STRING
            },
            corporation: { //保险公司名称
                type: DataTypes.STRING
            },
            moneytype: {  //缴费类型：0：人民币，1港币，2美元
                type: DataTypes.SMALLINT
            },
            payage: { //缴费年期
                type: DataTypes.SMALLINT
            },
            premium: { //每期保费
                type: DataTypes.FLOAT
            },
            coverage: { //保额（万）
                type: DataTypes.FLOAT
            },
            pattern: { //供款方式：1年缴，大于1预缴
                type: DataTypes.SMALLINT
            },
            feeid: { //产品费率ID
                type: DataTypes.INTEGER
            },
            richeid: { //顾问ID
                type: DataTypes.INTEGER
            },
            state: { //保单状态：1已签，2已批，3已结算（顾问收到佣金）
                type: DataTypes.INTEGER
            },
            addtime: { //
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

module.exports = sol_orderproduct;