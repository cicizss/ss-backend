const {DataTypes} = require('sequelize');
/**
 *保单预约持有人（投保人）
 * @param sequelize
 */
const  sol_subscribe_owner = (sequelize) => {
    sequelize.define('sol_subscribe_owner',
        {
            orderid: { //预约订单号
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            paytype: { //首期供款付款方式：0现金，1信用卡（Visa、Master），2电汇，3汇票，4香港户口支票
                type: DataTypes.INTEGER
            },
            continuepay: { //续期供款付款方式：0现金，1电汇，2汇票，3香港户口支票，4信用卡（需负担手续费），5香港银行自动转账（须填写授权书），6其他
                type: DataTypes.INTEGER
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
            },
            planid: { //计划书ID
                type: DataTypes.INTEGER
            },
            richeid: { //顾问ID
                type: DataTypes.INTEGER
            },
            state: { //0预约中，1预约成功，2数据异常，3删除
                type: DataTypes.INTEGER
            },
            gohktime: { //到香港时间
                type: DataTypes.DATE
            },
            leavehktime: { //离开香港时间
                type: DataTypes.DATE
            },
            groupNum: { //随行人数
                type: DataTypes.INTEGER
            },
            haschild: { //是否带小孩：0无，1有
                type: DataTypes.INTEGER
            },
            remark: { //预约描述
                type: DataTypes.SMALLINT
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

module.exports = sol_subscribe_owner;