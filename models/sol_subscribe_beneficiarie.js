const {DataTypes} = require('sequelize');
/**
 * 保单预约受益人
 * @param sequelize
 */
const  sol_subscribe_beneficiarie = (sequelize) => {
    sequelize.define('sol_subscribe_beneficiarie',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            orderid: { //预约订单号
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

module.exports = sol_subscribe_beneficiarie;