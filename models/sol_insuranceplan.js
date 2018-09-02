const {DataTypes} = require('sequelize');
/**
 * 保险计划书
 * @param sequelize
 */
const  sol_insuranceplan = (sequelize) => {
    sequelize.define('sol_insuranceplan',
        {
            planid: { //id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            sex: { //性别：0女，1男
                type: DataTypes.SMALLINT,
                notNull: true
            },
            smoke: { //是否吸烟：0否，1是
                type: DataTypes.SMALLINT,
                notNull: true
            },
            brithday: { //生日
                type: DataTypes.DATE
            },
            age: { //年龄
                type: DataTypes.INTEGER
            },
            retrospect: { //0不追溯，1追溯
                type: DataTypes.SMALLINT
            },
            region: { //地区：1大陆，2香港
                type: DataTypes.SMALLINT
            },
            corporation: { //公司名称
                type: DataTypes.STRING
            },
            productname: { //计划名称
                type: DataTypes.STRING
            },
            payage: { //缴费年期
                type: DataTypes.SMALLINT
            },
            paytype: { //费用类型：1保费，2保额
                type: DataTypes.SMALLINT
            },
            money: { //金额
                type: DataTypes.INTEGER
            },
            currency: { //币种（0：人民币，1港币，2美元）
                type: DataTypes.SMALLINT
            },
            file: { //计划书PDF文件
                type: DataTypes.STRING
            },
            addtime: { //添加时间
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

module.exports = sol_insuranceplan;