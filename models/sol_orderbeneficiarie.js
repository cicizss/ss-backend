const {DataTypes} = require('sequelize');
/**
 * 保险产品订单受益人
 * @param sequelize
 */
const  sol_orderbeneficiarie = (sequelize) => {
    sequelize.define('sol_orderbeneficiarie',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            policyNo: { //保单编号
                type: DataTypes.INTEGER,
            },
            name: { //姓名
                type: DataTypes.STRING
            },
            Ename: { //拼音姓名
                type: DataTypes.STRING
            },
            sex: { //性别：0女，1男
                type: DataTypes.SMALLINT
            },
            age: { //
                type: DataTypes.SMALLINT
            },
            certifyNo: { //证件号
                type: DataTypes.STRING
            },
            relation: { //与被保人关系
                type: DataTypes.STRING
            },
            rate: { //分配比率(同一保单总和100%)
                type: DataTypes.FLOAT
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_orderbeneficiarie;