const {DataTypes} = require('sequelize');
/**
 * 保单预约受保人
 * @param sequelize
 */
const  sol_subscribe_insurant = (sequelize) => {
    sequelize.define('sol_subscribe_insurant',
        {
            id: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            orderid: { //预约订单号
                type: DataTypes.INTEGER,
            },
            subscribe: { //预约时间
                type: DataTypes.DATETIME
            },
            name: { //姓名
                type: DataTypes.STRING
            },
            Ename: { //拼音姓名
                type: DataTypes.STRING
            },
            birthday: {  //生日
                type: DataTypes.DATE
            },
            sex: { //性别：0女，1男
                type: DataTypes.SMALLINT
            },
            tel: { //手机号
                type: DataTypes.STRING
            },
            nation: { //国籍
                type: DataTypes.STRING
            },
            educate: { //学历：1小学或以上，2中学，3大专或以上
                type: DataTypes.SMALLINT
            },
            marriage: { //婚姻状况：0未婚， 1已婚 ， 2离异， 3丧偶
                type: DataTypes.SMALLINT
            },
            smoke: { //是否吸烟：0否，1是
                type: DataTypes.SMALLINT
            },
            stature: { //身高(cm)
                type: DataTypes.FLOAT
            },
            weight: { //体重（kg）
                type: DataTypes.FLOAT
            },
            certifyNo: { //证件号
                type: DataTypes.STRING
            },
            permitNo: { //护照/通行证号码
                type: DataTypes.STRING
            },
            certifyAddr: { //证件号地址
                type: DataTypes.STRING
            },
            address: { //联系地址
                type: DataTypes.STRING
            },
            corporation: { //公司名称
                type: DataTypes.STRING
            },
            site: { //公司地址
                type: DataTypes.STRING
            },
            title: { //公司职位
                type: DataTypes.STRING
            },
            email: { //电子邮箱
                type: DataTypes.STRING
            },
            salary: { //年薪
                type: DataTypes.INTEGER
            },
            file: { //上传身份证，体检等信息
                type: DataTypes.STRING
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_subscribe_insurant;