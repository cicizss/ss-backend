const {DataTypes} = require('sequelize');
/**
 * 用户成员表 ---进一步抽象，归口事业合伙人/事业合伙人/财富团队成员
 * @param sequelize
 */
const  sol_riches = (sequelize) => {
    sequelize.define('sol_riches',
        {
            richeid: { //自增id
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { //用户名
                type: DataTypes.STRING
            },
            realname: { //真实姓名
                type: DataTypes.STRING
            },
            certifyNo: { //证件号
                type: DataTypes.STRING
            },
            tel: { //手机号
                type: DataTypes.STRING
            },
            sex: { //性别：0女，1男
                type: DataTypes.SMALLINT
            },
            bankcardid: { //银行卡号
                type: DataTypes.STRING
            },
            bankcardname: { //银行卡持卡姓名
                type: DataTypes.STRING
            },
            pwd: { //登陆密码 //TODO ？
                type: DataTypes.STRING
            },
            openID: { //微信小程序ID
                type: DataTypes.STRING
            },
            img: { // 顾问图像
                type: DataTypes.STRING
            },
            email: { //电子邮箱
                type: DataTypes.STRING
            },
            remark: { //备注
                type: DataTypes.STRING
            },
            master: { //最高级别：0非事业合伙人，1事业合伙人
                type: DataTypes.INTEGER
            },
            token: { //状态：0正在审核，1正常，2已解约
                type: DataTypes.STRING
            },
            addtime: { //签约时间
                type: DataTypes.TIMESTAMP
            },
            reference: { //推荐人   //TODO 归口事业合伙人？
                type: DataTypes.SMALLINT
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        }
    );
}

module.exports = sol_riches;